module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        country: DataTypes.STRING,
        city: DataTypes.STRING,
        age: DataTypes.INTEGER,
        sex: DataTypes.STRING,
    },
    {
      freezeTableName: true,
    }
  );
  return User;
};
