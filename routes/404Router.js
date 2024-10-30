import express from "express";

export const routeur=express.Router();
routeur.get("*", (req,resp)=>{
    resp.status(404).render("404");
})
