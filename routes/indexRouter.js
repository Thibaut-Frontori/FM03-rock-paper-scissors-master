import {Router} from "express";
export const routeur = Router();

routeur.get("/", (req, res) => {
    res.render("index");
  
  });