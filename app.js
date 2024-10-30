import express from 'express';
import {routeur as accueilRouteur } from "./routes/indexRouter.js";
import {routeur as erreurRouteur } from "./routes/404Router.js";

const app = express();
const port = 3000;
app.use(express.static('public'));
app.set("view engine", "ejs");
app.set("views", "./views");


// créer une première route
app.use(accueilRouteur);
app.use(erreurRouteur);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

