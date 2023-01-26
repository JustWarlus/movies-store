import { RequareAuth } from "components";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import {
  ChangePasswordPage,
  FavoritesPage,
  HomePage,
  LoginPage,
  MoviePage,
  NotFoundPage,
  RegistrationPage,
  SearchPage,
  SettingsPage,
  TrendsPage,
} from "../pages";
import { AuthorizationTemplate, MainTemplate } from "../template";
import { PAGE } from "./pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={PAGE.HOME} element={<MainTemplate />}>
        <Route index element={<HomePage />} />
        <Route path={PAGE.MOVIE} element={<MoviePage />} />
        <Route path={PAGE.SEARH} element={<SearchPage />} />
        <Route path={PAGE.NOT_FOUND} element={<NotFoundPage />} />

        <Route element={<RequareAuth />}>
          <Route path={PAGE.SETTINGS} element={<SettingsPage />} />
          <Route path={PAGE.TRENDS} element={<TrendsPage />} />
          <Route path={PAGE.FAVORITES} element={<FavoritesPage />} />
        </Route>
      </Route>
      <Route element={<AuthorizationTemplate />}>
        <Route path={PAGE.AUTHORIZATION} element={<LoginPage />} />
        <Route path={PAGE.REGISTRATION} element={<RegistrationPage />} />
        <Route path={PAGE.CHANGE_PASSWORD} element={<ChangePasswordPage />} />
      </Route>
    </>,
  ),
);
