const {
  models: { User },
} = require("../models");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  compare: async (request, response) => {
    const user = await User.findOne({ where: { email: request.body.email } });
    if (user) {
      const password_valid = await bcrypt.compare(
        request.body.password,
        user.password
      );
      if (password_valid) {
        token = jwt.sign(
          {
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
            data: "foobar",
          },
          "secret"
        );
        response.status(200).json({ token: token });
      } else {
        response.status(400).json({ error: "Password Incorrect" });
      }
    } else {
      response.status(404).json({ error: "User does not exist" });
    }
  },
};
