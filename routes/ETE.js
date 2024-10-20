import express from "express";
import { getUsers, addUser, updateUser, deleteUser } from "../controllers/ETE.js";

const router = express.Router();

router.get("/ETE", getUsers);

router.post("/ETE", addUser);

router.put("/ETE:id", updateUser);

router.delete("/ETE:id", deleteUser);

export default router;