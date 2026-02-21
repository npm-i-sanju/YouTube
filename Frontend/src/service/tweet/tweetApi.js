import { createApi } from "@reduxjs/toolkit/query/react";
import baseApi from "../baseApi.js";

export const tweetApi = createApi({
    reducerPath: "tweetApi",
    baseQuery: baseApi,

    tagTypes: ["Tweet"],

    endpoints: (builder) => ({

        createTweet: builder.mutation({
            query: (body) => ({
                url: "/tweets",
                method: "POST",
                body
            }),
            invalidatesTags: ["Tweet"]
        }),

        getUserTweet: builder.query({
            query: (userId) => `/tweets/user/${userId}`,
            providesTags: (result) =>
                result
                    ? [
                          ...result.map(({ _id }) => ({
                              type: "Tweet",
                              id: _id
                          })),
                          { type: "Tweet", id: "LIST" }
                      ]
                    : [{ type: "Tweet", id: "LIST" }]
        }),

        updateTweet: builder.mutation({
            query: ({ tweetId, body }) => ({
                url: `/tweets/${tweetId}`,
                method: "PATCH",
                body
            }),
            invalidatesTags: (result, error, { tweetId }) => [
                { type: "Tweet", id: tweetId },
                { type: "Tweet", id: "LIST" }
            ]
        }),

        deleteTweet: builder.mutation({
            query: (tweetId) => ({
                url: `/tweets/${tweetId}`,
                method: "DELETE"
            }),
            invalidatesTags: (result, error, tweetId) => [
                { type: "Tweet", id: tweetId },
                { type: "Tweet", id: "LIST" }
            ]
        }),

        toggleTweetLike: builder.mutation({
            query: (tweetId) => ({
                url: `/tweets/toggle-like/${tweetId}`,
                method: "PATCH"
            }),
            invalidatesTags: (result, error, tweetId) => [
                { type: "Tweet", id: tweetId },
                { type: "Tweet", id: "LIST" }
            ]
        }),

    }),
});

export const {
    useCreateTweetMutation,
    useGetUserTweetQuery,
    useUpdateTweetMutation,
    useDeleteTweetMutation,
    useToggleTweetLikeMutation, // ADD THIS
} = tweetApi;
