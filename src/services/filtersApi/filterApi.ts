import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const KEY_FILTER_API = "T87SNDA-ZCF4QKN-JM8GEYB-RMT78RG";

export const filtersApi = createApi({
  reducerPath: "filtersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.kinopoisk.dev" }),

  endpoints: (build) => ({
    getFilter: build.query<any, string | undefined>({
      query: ({
        movieName,
        yearFrom,
        yearTo,
        ratingFrom,
        ratingTo,
        genres,
        sortField = "externalId.imdb",
      }: any) => ({
        url: `/movie?token=${KEY_FILTER_API}${
          movieName ? `&field=alternativeName&search=${movieName}&isStrict=false` : ""
        }&field=year&search=${yearFrom ? yearFrom : "1980"}-${
          yearTo ? yearTo : "2023"
        }&field=rating.imdb&search=${ratingFrom ? ratingFrom : "1"}-${ratingTo ? ratingTo : "10"}&${
          genres ? `field=genres.name&search=${genres.value}` : ""
        }&sortField=${sortField}&sortType=1&sortField=externalId.imdb&sortType=-1&selectFields=externalId.imdb`,
      }),
    }),
  }),
});

export const { useGetFilterQuery } = filtersApi;
