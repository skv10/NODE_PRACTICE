const express = require("express");
const app = express();
const routes = require("./routes/user.routes");
const discussionRoutes = require("./routes/discussion.routes");

app.use(express.json());

app.use("/user", routes);
app.use("/discussion", discussionRoutes);


module.exports = app;