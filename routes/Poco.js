import express from "express";
import { getUsers, addUser, updateUser, deleteUser } from "../controllers/Poco.js";

const router = express.Router();

router.get("/poco", getUsers);

router.post("/poco", addUser);

router.put("/poco:id", updateUser);

router.delete("/poco:id", deleteUser);

export default router;