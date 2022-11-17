const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const userFavouriteRouter = require("./favourite");
const moviesRouter = require("./movies");
const tvShowsRouter = require("./tvShows");

router.use("/users", userRouter);
router.use("/favourites", userFavouriteRouter);
router.use("/movies", moviesRouter);
router.use("/tvshows", tvShowsRouter);

module.exports = router;
