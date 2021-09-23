const express = require("express");
const app = express();
require("../database/conn");
const item = require("../model/schema");
const routes = require("../routes/route");
const path = require("path")
const static_path = path.join(__dirname, "../public");

const port = process.env.PORT || 8000;


app.set('view engine', 'hbs');
app.use(express.static(static_path));
app.use(express.json())
app.use(routes);


app.listen(port, () => {
    console.log(`Server connection at port ${port}`);
});