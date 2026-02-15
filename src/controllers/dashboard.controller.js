import mongoose from "mongoose";
import {asyncHandler} from "../utils/asyncHendler.js";
import {ApiError} from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import {Subscription} from "../models/subscription.model.js";
import {Like} from "../models/like.model.js";
import {User} from "../models/user.model.js";




const getChannelStats = asyncHandler(async (req, res) => {
    // TODO: Get the channel stats like total video views, total subscribers, total videos, total likes etc.
//conet user = await U

  
})

const getChannelVideos = asyncHandler(async (req, res) => {
    // TODO: Get all the videos uploaded by the channel
})

export {
    getChannelStats, 
    getChannelVideos
    }