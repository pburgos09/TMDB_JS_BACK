const User = require("./User");
const UserFavourite = require("./UserFavorites");

User.belongsToMany(UserFavourite, { through: "user_favourites" });
UserFavourite.belongsTo(User, { through: "user_favourites" });

module.exports = { User, UserFavourite };
