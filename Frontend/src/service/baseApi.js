import {fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import envConf from "../conf/conf.js";

const baseApi = fetchBaseQuery({
    baseUrl: envConf.backendUrl,
    prepareHeaders: (headers,{endpoint})=>{
        const token = localStorage.getItem("token")
        const noAuthEndPoint = [
            "registerUser","loginUser", "refreshAccessToken", "getAllvideos"
        ]
        if (!noAuthEndPoint.includes(endpoint)&& token) {
            headers.set("Authorization", `Bearer ${token}`)
        }
    }
})

export default baseApi;