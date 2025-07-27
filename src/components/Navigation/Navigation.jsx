import s from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className={s.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => `${s.link} ${isActive ? s.active : ""}`}
      >
        Home
      </NavLink>
      <NavLink
        to="/catalog"
        className={({ isActive }) => `${s.link} ${isActive ? s.active : ""}`}
      >
        Catalog
      </NavLink>
    </nav>
  );
}
