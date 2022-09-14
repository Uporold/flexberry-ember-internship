import Service from "@ember/service";
import ENV from "flexberry-ember-internship/config/environment";

export default Service.extend({
  async sendError(error) {
    const errorObject = {
      date: new Date().toISOString(),
      url: window.location.href,
      error:
        error instanceof Error
          ? JSON.parse(JSON.stringify(error, Object.getOwnPropertyNames(error)))
          : error
    };
    return fetch(`${ENV.backendURL}/errors`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(errorObject)
    });
  }
});
