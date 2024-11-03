import express from "express";
import { getEte, addEte, updateEte, deleteEte } from "../controllers/ETE.js";

const routerEte = express.Router();

routerEte.get("/", getEte);

routerEte.post("/", addEte);

routerEte.put("/:id", updateEte);

routerEte.delete("/:id", deleteEte);

export default routerEte;