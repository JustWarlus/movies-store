import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IMovieInfoAPI, IDataMoviePosterApi } from "types/types";

const KEY_API = "2fa1535f";

export const movieApi = createApi({
  reducerPath: "movieAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.omdbapi.com/" }),
  endpoints: (build) => ({
    getMovieById: build.query<IMovieInfoAPI, string>({
      query: (id) => ({
        url: "",
        params: {
          apikey: KEY_API,
          i: id,
        },
      }),
    }),

    getMovieByTitle: build.query<IDataMoviePosterApi, string>({
      query: (title) => ({
        url: "",
        params: {
          apikey: KEY_API,
          s: title,
        },
      }),
    }),
  }),
});

export const { useGetMovieByIdQuery, useGetMovieByTitleQuery } = movieApi;
