require("dotenv").config();

const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const { errors } = require("celebrate");
const app = express();

const corsOptions = {
  exposedHeaders: "X-Total-Count",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);
app.use(errors());

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.connection.on(
  "error",
  console.error.bind(console, "connection error")
);
mongoose.connection.once("open", () => {
  console.log("database connected!");
  require("./models/googleDriveModel").config();
});

app.listen(process.env.PORT || 3333);
