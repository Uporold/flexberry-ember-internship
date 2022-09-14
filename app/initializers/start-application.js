import ErrorsService from "../services/errors";
export function initialize(application) {
  application.register("service:errors", ErrorsService);
  application.inject("controller", "errorsLogger", "service:errors");
  application.inject("route", "errorsLogger", "service:errors");
  application.inject("component", "errorsLogger", "service:errors");
}

export default {
  initialize
};
