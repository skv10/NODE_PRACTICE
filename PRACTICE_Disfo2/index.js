const app = require("./app");
const config = require("./config/config");
const mongoose = require("mongoose");
const server = app;

mongoose.connect(config.mongoose.url).then(() => {
   console.log("Database connected successfully");
})


server.listen(config.port ,() => {
    console.log(`Server Listening at PORT ${config.port}`);
})