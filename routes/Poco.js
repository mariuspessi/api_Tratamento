import express from "express";
import { getPoco, addPoco, updatePoco, deletePoco } from "../controllers/Poco.js";

const routerPoco = express.Router();

routerPoco.get("/", getPoco);

routerPoco.post("/", addPoco);

routerPoco.put("/:id", updatePoco);

routerPoco.delete("/:id", deletePoco);

export default routerPoco;