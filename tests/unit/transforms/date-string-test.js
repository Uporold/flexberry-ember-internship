import { module, test } from "qunit";
import { setupTest } from "ember-qunit";

module("transform:date-string", "Unit | Transform | date string", function(
  hooks
) {
  setupTest(hooks);

  // Replace this with your real tests.
  test("it exists", function(assert) {
    let transform = this.owner.lookup("transform:date-string");
    assert.ok(transform);
  });
});
