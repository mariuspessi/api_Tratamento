import express from "express";
import { getLagoa, addLagoa, updateLagoa, deleteLagoa } from "../controllers/Lagoa.js";

const routerLagoa = express.Router();

routerLagoa.get("/", getLagoa);

routerLagoa.post("/", addLagoa);

routerLagoa.put("/:id", updateLagoa);

routerLagoa.delete("/:id", deleteLagoa);

export default routerLagoa;