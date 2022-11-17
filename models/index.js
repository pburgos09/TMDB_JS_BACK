const User = require("./User");
const UserFavourite = require("./UserFavorites");

User.belongsToMany(UserFavourite);
UserFavourite.belongsTo(User);

module.exports = { User, UserFavourite };
