import { EJSON } from "meteor/ejson";

Router.route("/api/1.0/posts/top", {
  name: "rest.api.posts.top",
  where: "server",
  action: function() {
    const response = {
      success: false
    };

    this.response.setHeader("Content-Type", "application/json");
    this.response.setHeader("Access-Control-Allow-Origin", "*");
    this.response.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept");

    this.response.end(EJSON.stringify(response));
    return {};
  }
});
