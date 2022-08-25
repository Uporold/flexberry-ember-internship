import { module, test } from "qunit";
import { setupTest } from "ember-qunit";

module("Unit | Route | meetings/edit/report-create", function(hooks) {
  setupTest(hooks);

  test("it exists", function(assert) {
    let route = this.owner.lookup("route:meetings/edit/report-create");
    assert.ok(route);
  });
});
