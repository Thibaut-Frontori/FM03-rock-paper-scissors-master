import express from "express";
export const routeur = express.Router();

routeur.get("/", (req, res) => {
    res.render("index");
  
  });