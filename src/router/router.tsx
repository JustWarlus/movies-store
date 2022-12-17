import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import {
  ChangePasswordPage,
  FavoritesPage,
  HomePage,
  LoginPage,
  MoviePage,
  NotFoundPage,
  ProfilePage,
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
        <Route index path={PAGE.HOME} element={<HomePage />} />
        <Route index path={PAGE.FAVORITES} element={<FavoritesPage />} />
        <Route index path={PAGE.CHANGE_PASSWORD} element={<ChangePasswordPage />} />
        <Route index path={PAGE.MOVIE} element={<MoviePage />} />
        <Route index path={PAGE.PROFILE} element={<ProfilePage />} />
        <Route index path={PAGE.SEARH} element={<SearchPage />} />
        <Route index path={PAGE.SETTINGS} element={<SettingsPage />} />
        <Route index path={PAGE.TRENDS} element={<TrendsPage />} />
        <Route index path={PAGE.NOT_FOUND} element={<NotFoundPage />} />
      </Route>
      <Route path={PAGE.HOME} element={<AuthorizationTemplate />}>
        <Route index path={PAGE.AUTHORIZATION} element={<LoginPage />} />
        <Route index path={PAGE.REGISTRATION} element={<RegistrationPage />} />
      </Route>
    </>,
  ),
);
