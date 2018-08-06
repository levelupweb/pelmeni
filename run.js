require("dotenv").load();
require("ignore-styles");
require("babel-register")({
  presets: ["env", "react-app"]
});
require("./server/db").createMongooseConnection();
require("./server/index");