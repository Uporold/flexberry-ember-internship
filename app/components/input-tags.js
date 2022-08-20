import Component from "@ember/component";
import { typeOf } from "@ember/utils";
import { assert } from "@ember/debug";
import $ from "jquery";

export default Component.extend({
  didInsertElement() {
    this._super(...arguments);

    const el = this.$();

    this.set("addTag", e => {
      this.tagAdded(e.item);
    });

    this.set("removeTag", e => {
      this.tagRemoved(e.item);
    });

    el.on("itemAdded", this.addTag);
    el.on("itemRemoved", this.removeTag);
  },

  didReceiveAttrs() {
    const tags = this.get("tags");
    assert("Passed tags must be an array", typeOf(tags) === "array");
    this.set("_tags", [...tags]);
  },

  didRender() {
    const arraysAreEqual = (arr1, arr2) => {
      arr2 = arr2.itemsArray ? arr2.itemsArray : arr2;
      return $(arr1).not(arr2).length === 0 && $(arr2).not(arr1).length === 0;
    };

    const el = this.$();

    const currentValues = el.tagsinput("items");
    const tags = this.get("_tags");

    if (!arraysAreEqual(tags, currentValues)) {
      el.tagsinput("removeAll");
      tags.forEach(tag => {
        el.tagsinput("add", tag);
      });
    }
  },

  tagAdded(newTag) {
    this.get("_tags").push(newTag);
    this.get("onChange")(this._tags);
  },

  tagRemoved(tag) {
    const tagIndex = this.get("_tags").indexOf(tag);
    if (tagIndex > -1) {
      const part1 = this.get("_tags").slice(0, tagIndex);
      const part2 = this.get("_tags").slice(tagIndex + 1);
      this.set("_tags", [...part1, ...part2]);
      this.get("onChange")(this._tags);
    }
  },

  willDestroyElement() {
    const el = this.$();
    el.off("itemAdded", this.addTag);
    el.off("itemRemoved", this.removeTag);
  }
});
