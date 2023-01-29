import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IMovieInfoAPI, IDataMoviePosterApi } from "types";

const KEY_API = process.env.REACT_APP_KEY_API;

interface IQuery {
  title: string;
  page?: number;
}

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

    getMovieByTitle: build.query<IDataMoviePosterApi, IQuery>({
      query: ({ title = "", page = 1 }) => ({
        url: "",
        params: {
          apikey: KEY_API,
          s: title,
          page: page,
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
