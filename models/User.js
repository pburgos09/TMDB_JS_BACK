const S = require("sequelize");
const db = require("../config/db");
const bcrypt = require("bcrypt");

class User extends S.Model {
  encryptPassword(password, salt) {
    return bcrypt.hash(password, salt);
  }
  async comparePassword(password) {
    return bcrypt.compare(password, this.password);
  }
}

User.init(
  {
    name: {
      type: S.STRING,
      validate: {
        notEmpty: true,
        is: [/^[A-Za-z ]+$/g],
      },
    },
    last_name: {
      type: S.STRING,
      validate: {
        notEmpty: true,
        is: [/^[A-Za-z ]+$/g],
      },
    },
    alias: {
      type: S.STRING,
      validate: {
        notEmpty: true,
        is: [/^[A-Za-z ]+$/g],
      },
    },
    email: {
      type: S.STRING,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    password: {
      type: S.STRING,
      validate: {
        notEmpty: true,
        is: [/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/g],
      },
    },
    salt: {
      type: S.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "user",
  }
);

User.beforeCreate(async (user) => {
  if (!user.password) return;
  try {
    const salt = bcrypt.genSaltSync(16);
    user.salt = salt;
    const passwordHash = await user.encryptPassword(user.password, salt);
    user.password = passwordHash;
  } catch (err) {
    console.log(err);
  }
});

module.exports = User;
