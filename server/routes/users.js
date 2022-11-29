import express from "express";
import { deleteUser, dislike, getUser, like, subscribe, unsubscribe, update } from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// Update a User
router.put("/:id",verifyToken, update)

// Delete a User
router.delete("/:id",verifyToken, deleteUser)

// get a User
router.get("/find/:id", getUser)

// subscribe a User
router.put("/subscribe/:id", verifyToken, subscribe)

// unsubscribe a User
router.put("/unsub/:id", unsubscribe)

// LIke a video
router.put("/like/:videoId", like)

// dislike a video
router.put("/dislike/:videoId", dislike)

export default router