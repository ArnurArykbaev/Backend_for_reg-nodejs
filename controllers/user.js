const {
  models: { User },
} = require("../models");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  create: async (request, response) => {
    const salt = await bcrypt.genSalt(10);
    if (await User.findOne({ where: { email: request.body.email } })) {
      response.send('Email "' + request.body.email + '" is already registered');
    } else if (
      await User.findOne({ where: { username: request.body.username } })
    ) {
      response.send(
        'Username "' + request.body.username + '" is already registered'
      );
    } else if (
      request.body.username &&
      request.body.password &&
      request.body.email &&
      request.body.age &&
      request.body.sex
    ) {
      const { username, email, country, city, age, sex } =
        request.body;

      const password = await bcrypt.hashSync(request.body.password, salt);

      await User.create({
        username,
        password,
        email,
        country,
        city,
        age,
        sex,
      });
      response.send('Username "' + request.body.username + '" is registered');
    } else {
      response.send("Not added to the database, your data may incorrect");
    }
  },
};
