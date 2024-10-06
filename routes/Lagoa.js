import express from "express";
import { getUsers, addUser, updateUser, deleteUser } from "../controllers/Lagoa.js";

const router = express.Router();

router.get("/lagoa", getUsers);

router.post("/lagoa", addUser);

router.put("/lagoa:id", updateUser);

router.delete("/lagoa:id", deleteUser);

export default router;