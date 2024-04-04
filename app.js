import express from "express";
import router from "./routers/router.js";
import dotenv from "dotenv";
import methodOverride from "method-override";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/books", router);
app.set("view engine", "ejs");
app.set("views", "views");
app.use(methodOverride("_method"));

app.listen(PORT, () => console.log(`Listening in port ${PORT}`));
