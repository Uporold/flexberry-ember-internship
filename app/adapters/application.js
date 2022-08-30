import DS from "ember-data";
import ENV from "flexberry-ember-internship/config/environment";

export default DS.JSONAPIAdapter.extend({
  host: ENV.backendURL,

  init() {
    this._super(...arguments);
    this.set("headers", {
      "Content-Type": "application/json"
    });
  },

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
        const data = await store.findAll(type.modelName);
        return data.content;
      }
    }
  },

  // Фиксит баг, который заключается в том, что если удалить книгу/спикера, а сразу потом создать,
  // то вылезет ошибка Assertion Failed: 'item' was saved to the server, but the response returned the new id 'itemId',
  // which has already been used with another record.
  createRecord(store, type) {
    let request = this._super(...arguments);

    if (ENV.environment === "development") {
      request.then(response => {
        let id = response.id;
        let map = store._internalModelsFor(type.modelName);
        let internalModel = map.get(id);
        map.remove(internalModel, id);
      });
    }

    return request;
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
