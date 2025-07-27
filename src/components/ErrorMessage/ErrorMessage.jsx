import s from "./Error.Message.module.css";
import { Link } from "react-router";

const ErrorMessage = ({ message = "Something went wrong" }) => {
  return (
    <div className={s.error}>
      <h2>Error</h2>
      <p>{message}</p>
      <Link to="/" className={s.button}>
        Return to Homepage
      </Link>
    </div>
  );
};

export default ErrorMessage;
