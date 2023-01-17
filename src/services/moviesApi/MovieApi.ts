import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IMovieInfoAPI, IDataMoviePosterApi } from "types/types";

const KEY_API = "2fa1535f";

export const movieApi = createApi({
  reducerPath: "movieAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.omdbapi.com/" }),
  endpoints: (build) => ({
    getMovieById: build.query<IMovieInfoAPI, string | undefined>({
      query: (id) => ({
        url: "",
        params: {
          apikey: KEY_API,
          i: id,
        },
      }),
    }),

    getMovieByTitle: build.query<IDataMoviePosterApi, string | undefined>({
      query: (title) => ({
        url: "",
        params: {
          apikey: KEY_API,
          s: title,
        },
      }),
    }),

    getOneMovieByTitle: build.query<IMovieInfoAPI, string | undefined>({
      query: (title) => ({
        url: "",
        params: {
          apikey: KEY_API,
          t: title,
          plot: "short",
        },
      }),
    }),
  }),
});

export const { useGetMovieByIdQuery, useGetMovieByTitleQuery, useGetOneMovieByTitleQuery } =
  movieApi;
