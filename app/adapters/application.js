import DS from "ember-data";
import { computed } from "@ember/object";
import { inject as service } from "@ember/service";
import ENV from "flexberry-ember-internship/config/environment";

export default DS.JSONAPIAdapter.extend({
  session: service(),
  host: ENV.backendURL,

  headers: computed(function() {
    let resultHeaders = {
      "Content-Type": "application/json"
    };

    if (this.session.isAuthenticated) {
      resultHeaders["Authorization"] = `Bearer ${
        this.session.data.authenticated.token
      }`;
    }

    return resultHeaders;
  }).volatile(),

  buildURL(modelName, id, snapshot, requestType, query) {
    let url = this._super(...arguments);
    if (modelName === "meeting" && requestType === "findRecord" && id) {
      url += "?_embed=reports";
    }

    return url;
  },

  async query(store, type, query) {
    const { search, tags_like, meetingsQueries = {} } = query;
    let tagsLike;
    if (tags_like) {
      tagsLike = tags_like.replace(/\s*,\s*/g, ",");
    }
    switch (true) {
      case !!(search && tags_like): {
        return this._super(store, type, {
          q: search,
          tags_like: tagsLike
        });
      }
      case search && !tags_like: {
        return this._super(store, type, {
          q: search
        });
      }
      case tags_like && !search: {
        return this._super(store, type, {
          tags_like: tagsLike
        });
      }
      case Object.keys(meetingsQueries).length > 0: {
        return this._super(store, type, meetingsQueries);
      }
      default: {
        return this._super(store, type, {});
      }
    }
  },

  handleResponse(status, headers, payload, requestData) {
    const meta = {
      total: headers["x-total-count"]
    };

    payload.meta = meta;
    let responseObject = this._super(...arguments, payload);

    if (responseObject && responseObject.isAdapterError) {
      responseObject.httpErrorResponse = {
        status,
        headers,
        payload
      };
    }

    return responseObject;
  }
});
