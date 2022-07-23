const express = require("express");
const app = express();
const path = require("path");
const db = require('./models');

const users = require("./routes/users");
const posts = require("./routes/posts");
const register = require("./routes/register");
const login = require("./routes/login");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "./views"));

(async () => {
  await db.sequelize.sync();
})();

app.use("/users", users);
app.use("/posts", posts);
app.use("/register", register);
app.use("/login", login);


app.use('/static', express.static(path.join(__dirname, "./public")));

app.get("/", [
  (request, response, next) => {
    console.log("middleware 1");
    next();
  },

  (request, response, next) => {
    console.log("middleware 2");
    next();
    response.send("This is middleware number 2!");
  },

  (request, response, next) => {
    console.log("middleware 3");
    next();
  },

  (request, response, next) => {
    response.send("This is middleware number 4!");
  },
]);

app.listen(1234);
