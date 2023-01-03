
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IMovie } from "../types/types";



export const movieApi = createApi({
  reducerPath: "movieAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.omdbapi.com/?apikey=2fa1535f&" }),
  endpoints: (build) => ({
    fetchAllMovies: build.query<IMovie[], number>(definition: {
        query: (limit: number = 10) => ({
            url: '',
            params: {
                limit: limit
            }
        })
    })
  })
});


