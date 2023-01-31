import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IFilterApi } from "types";

export const KEY_FILTER_API = process.env.REACT_APP_KEY_API_DOP;

export const filtersApi = createApi({
  reducerPath: "filtersApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_KEY_API_URL_DOP }),

  endpoints: (build) => ({
    getFilter: build.query<IFilterApi, string | undefined>({
      query: ({
        movieName,
        yearFrom,
        yearTo,
        ratingFrom,
        ratingTo,
        genres,
        typeSort = "externalId.imdb",
      }: any) => ({
        url: `/movie?token=${KEY_FILTER_API}${
          movieName ? `&field=alternativeName&search=${movieName}&isStrict=false` : ""
        }&field=year&search=${yearFrom ? yearFrom : "1980"}-${
          yearTo ? yearTo : "2023"
        }&field=rating.imdb&search=${ratingFrom ? ratingFrom : "1"}-${ratingTo ? ratingTo : "10"}&${
          genres ? `field=genres.name&search=${genres.value}` : ""
        }&sortField=${typeSort}&sortType=1&sortField=externalId.imdb&sortType=-1&selectFields=externalId.imdb`,
      }),
    }),
  }),
});

export const { useGetFilterQuery } = filtersApi;
