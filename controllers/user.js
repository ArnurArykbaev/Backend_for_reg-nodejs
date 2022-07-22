const {
  models: { User },
} = require("../models");
const db = require("../models");

module.exports = {
  create: async (request, response) => {
    if (await User.findOne({ where: { username: request.body.username } })) {
      response.send('Username "' + request.body.username + '" is already registered');
    } else if (request.body.username && request.body.password) {
      const { username, password } = request.body;

      await User.create({
        username,
        password,
      });
      response.send('Username "' + request.body.username + '" is registered');
    } else {
      response.send("Not added to the database");
    }
  },
};
