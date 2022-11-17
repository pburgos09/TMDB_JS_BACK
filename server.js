const express = require("express");
const app = express();
const cors = require("cors");
const volleyball = require("volleyball");
const cookieParser = require("cookie-parser");
const db = require("./config/db");
const routes=require("./routes")
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(volleyball);
app.use("/api", routes);

db.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
});
