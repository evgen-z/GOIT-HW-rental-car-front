import s from "./Loader.module.css";
import { FadeLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className={s.loader}>
      <FadeLoader
        color="#0B44CD"
        loading={true}
        size={20}
        aria-label="loading-spinner"
      />
    </div>
  );
}
