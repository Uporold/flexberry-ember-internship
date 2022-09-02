import { Ability } from "ember-can";
import { inject as service } from "@ember/service";
import { computed } from "@ember/object";

export default Ability.extend({
  currentUser: service(),
  session: service(),

  _checkUserOwnership() {
    return new Promise((resolve, reject) => {
      return this.get("model.user")
        .then(user => {
          resolve(
            user.get("username") === this.get("currentUser.user.username")
          );
        })
        .catch(() => {
          reject(false);
        });
    });
  },

  canCreate: computed("session.isAuthenticated", function() {
    return this.get("session.isAuthenticated");
  }),

  canManipulate: computed("session.isAuthenticated", function() {
    if (this.get("session.isAuthenticated")) {
      if (this.get("currentUser.user.isAdmin")) {
        return true;
      }
      return this._checkUserOwnership();
    }
    return false;
  }).volatile()
});
