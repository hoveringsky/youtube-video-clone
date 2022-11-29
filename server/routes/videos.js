import express from "express";
import { addVideo, deleteVideo, getVideo, updateVideo } from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// Get Video

router.get('/find/:id', getVideo)

router.put('/:id', verifyToken, updateVideo)

router.delete('/:id', verifyToken, deleteVideo)

router.post('/:id', verifyToken, addVideo)

router.put('/view/:id', verifyToken, addVideo)

router.put('/trend', verifyToken, addVideo)
router.put('/random', verifyToken, addVideo)


export default router