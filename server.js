const express = require("express");
const app = express();
const cors = require("cors");
const volleyball = require("volleyball");
const cookieParser=require("cookie-parser")
const PORT=3001

app.use(express.json())
app.use(volleyball)

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})