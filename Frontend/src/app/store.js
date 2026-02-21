import { configureStore } from "@reduxjs/toolkit";

import { videoApi } from "../service/video/videoApi.js";
import { playlistApi } from "../service/playlist/playlistApi.js";
import { commentApi } from "../service/comment/commentApi.js";
import { likeApi } from "../service/like/likeApi.js";
import { dashboardApi } from "../service/dashboard/dashboardApi.js";
import { userApi } from "../service/user/userApi.js";
import { subscriptionApi } from "../service/subscription/subscriptionsApi.js";
import { tweetApi } from "../service/tweet/tweetApi.js";

const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        [tweetApi.reducerPath]: tweetApi.reducer,
        [subscriptionApi.reducerPath]: subscriptionApi.reducer,
        [dashboardApi.reducerPath]: dashboardApi.reducer,
        [likeApi.reducerPath]: likeApi.reducer,
        [commentApi.reducerPath]: commentApi.reducer,
        [playlistApi.reducerPath]: playlistApi.reducer,
        [videoApi.reducerPath]: videoApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            userApi.middleware,
            videoApi.middleware,
            playlistApi.middleware,
            commentApi.middleware,
            likeApi.middleware,
            dashboardApi.middleware,
            subscriptionApi.middleware,
            tweetApi.middleware
        ),
});

export default store;
