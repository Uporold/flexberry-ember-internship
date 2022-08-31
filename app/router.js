import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("books", function() {
    this.route("edit", { path: "/:id/edit" });
    this.route("create");
  });
  this.route("speakers", function() {
    this.route("edit", { path: "/:id/edit" });
    this.route("create");
  });

  this.route("meetings", function() {
    this.route("edit/index", { path: "/:meeting_id/edit" });
    this.route("edit/report-edit", { path: "reports/:report_id/report-edit" });
    this.route("edit/report-create", {
      path: "/:id/reports/report-create"
    });
    this.route("create");
  });
  this.route("register");
  this.route("login");
  this.route("404", { path: "/*path" });
});

export default Router;
