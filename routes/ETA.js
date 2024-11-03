import express from "express";
import { getEta, addEta, updateEta, deleteEta } from "../controllers/ETA.js";

const routerEta = express.Router();

routerEta.get("/", getEta);

routerEta.post("/", addEta);

routerEta.put("/:id", updateEta);

routerEta.delete("/:id", deleteEta);

export default routerEta;