import { helper } from "@ember/component/helper";
import ENV from "flexberry-ember-internship/config/environment";
import { get } from "@ember/object";

export function env([propertyName]) {
  return get(ENV, propertyName);
}

export default helper(env);
