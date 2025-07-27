import { Outlet } from "react-router";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { selectError } from "../../redux/selectors.js";
import s from "./Layout.module.css";
import Header from "../Header/Header.jsx";
import Loader from "../Loader/Loader.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";

export default function Layout() {
  const error = useSelector(selectError);

  return (
    <div className={s.wrapper}>
      <Header />

      <main className={s.layout}>
        {error ? (
          <ErrorMessage message={error} />
        ) : (
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        )}
      </main>
    </div>
  );
}
