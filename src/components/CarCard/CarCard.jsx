import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/slice";
import { useNavigate } from "react-router-dom";
import { selectFavorites } from "../../redux/selectors";
import { formatMileage } from "../../services/formatMileage";
import icons from "../../assets/icons/icons.svg";
import s from "./CarCard.module.css";

const CarCard = ({ car }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector(selectFavorites);

  const parts = car.address.split(",").map((part) => part.trim());
  const city = parts[parts.length - 2];
  const country = parts[parts.length - 1];

  return (
    <div className={s.carCardContainer}>
      <img src={car.img} alt={car.brand} />
      <button
        className={`${s.favoriteBtn} ${
          favorites.includes(car.id) ? s.activeFavorite : ""
        }`}
        onClick={() => dispatch(toggleFavorite(car.id))}
      >
        <svg width="16" height="16">
          <use
            href={`${icons}#${
              favorites.includes(car.id)
                ? "icon-heart-active"
                : "icon-heart-default"
            }`}
          />
        </svg>
      </button>

      <div className={s.textContainer}>
        <div className={s.textMain}>
          <p>
            {car.brand} <span>{car.model}</span>, {car.year}
          </p>
          <p>${car.rentalPrice}</p>
        </div>
        <div className={s.textAdd}>
          <p>
            {city} | {country} | {car.rentalCompany}
          </p>
          <p>
            {car.type} | {formatMileage(car.mileage)} km
          </p>
        </div>
      </div>

      <button
        className={s.button}
        onClick={() => navigate(`/catalog/${car.id}`)}
      >
        Read More
      </button>
    </div>
  );
};

export default CarCard;
