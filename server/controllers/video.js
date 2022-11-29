import { createError } from "../error.js";
import Video from "../models/Video.js"
export const getVideo = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id)
        res.status(200).json(video)
    } catch (error) {
        next(err)
    }

}

export const addVideo = async (req, res, next) => {
    const newVideo = new Video({ userId: req.user.id, ...req.body})
    try{
        const savedVideo = await newVideo.save();
        res.status(200).json(savedVideo);
    } catch (err){
        next(err)
    }
}

export const updateVideo = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id);
        if(!video) return next(createError(404, 'Video Not Found!!'));
        if(req.user.id === video.userId){
            const updatedUser = await Video.findByIdAndUpdate({ userId: req.user.id }, {
                $set: req.body
            }, {
                new: true
            })
            res.status(400).json(" Video Updated SUccessfully ")
        }
    } catch (err) {
        return next(createError(403, "Unauthorized. You can update only your video"))
    }
    
}

export const deleteVideo = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id);
        if(!video) return next(createError(404, " No video found"));
        if (req.user.id === video.userId){
            await Video.findByIdAndDelete(req.params.id)
            res.status(200).json(" Video Deleted Successfully!")
        }
    } catch (err) {
        next(err)
    }
}