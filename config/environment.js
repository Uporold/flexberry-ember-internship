"use strict";

module.exports = function(environment) {
  let ENV = {
    modulePrefix: "flexberry-ember-internship",
    environment,
    rootURL: "/", // /flexberry-ember-internship/ gh-pages
    backendURL: "http://localhost:3000",
    locationType: "auto",
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    "ember-simple-auth-token": {
      serverTokenEndpoint: "http://localhost:3000/token",
      refreshAccessTokens: false
    },
    "ember-cli-google": {
      recaptcha: {
        siteKey: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
      }
    },
    i18n: {
      defaultLocale: "ru"
    }
  };

  ENV.fileUploadURL = ENV.backendURL + "/FileUpload";

  if (environment === "development") {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === "test") {
    // Testem prefers this...
    ENV.locationType = "none";

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = "#ember-testing";
    ENV.APP.autoboot = false;
  }

  if (environment === "production") {
    // here you can enable a production-specific feature
  }

  return ENV;
};
