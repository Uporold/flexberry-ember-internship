import { module, test } from "qunit";
import { setupTest } from "ember-qunit";

module("Unit | Route | speakers/index", function(hooks) {
  setupTest(hooks);

  test("it exists", function(assert) {
    let route = this.owner.lookup("route:speakers/index");
    assert.ok(route);
  });
});
