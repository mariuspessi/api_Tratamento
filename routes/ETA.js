import express from "express";
import { getUsers, addUser, updateUser, deleteUser } from "../controllers/ETA.js";

const router = express.Router();

router.get("/ETA", getUsers);

router.post("/ETA", addUser);

router.put("/ETA:id", updateUser);

router.delete("/ETA:id", deleteUser);

export default router;