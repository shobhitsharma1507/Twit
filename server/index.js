const express = require("express");
const dotenv = require("dotenv");
const mongooose = require("mongoose");
const bodyParser = require("body-parser");
const users = require("./routes/users");
const passport = require('passport');
const cors = require("cors");

const app = express();

dotenv.config();

mongooose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(passport.initialize())
require('./config/passport')(passport)

app.use("/api/users", users);

app.listen(process.env.PORT, () =>
  console.log("Server is running on port 5000")
);
