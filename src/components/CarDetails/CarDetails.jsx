import s from "./CarDetails.module.css";
import icons from "../../assets/icons/icons.svg";
import { useMemo } from "react";
import { formatMileage } from "../../services/formatMileage";

const generateCarId = () => {
  return Math.floor(1000 + Math.random() * 9000).toString();
};

const CarDetails = ({ car }) => {
  const carId = useMemo(() => generateCarId(), []);

  if (!car) return null;

  const {
    brand,
    model,
    type,
    year,
    rentalPrice,
    description,
    address,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalConditions,
    mileage,
  } = car;

  const [_, city, country] = address.split(",").map((s) => s.trim());

  return (
    <div className={s.carDetails}>
      <div className={s.infoMain}>
        <div className={s.infoMainTop}>
          <h2>
            {brand} {model}, {year}
          </h2>
          <p className={s.pLight}>id:{carId}</p>
        </div>

        <div className={s.infoMainBtm}>
          <p>
            <svg width="16" height="16">
              <use href={`${icons}#icon-location`} />
            </svg>
            {city}, {country}
          </p>
          <p>Mileage:{formatMileage(mileage)} km</p>
        </div>

        <p className={s.price}>${rentalPrice}</p>
        <p>{description}</p>
      </div>

      <div className={s.infoLists}>
        <div className={s.infolist}>
          <h3>Rental conditions:</h3>
          <ul className={s.list}>
            {rentalConditions.map((cond, idx) => (
              <li key={idx} className={s.listItem}>
                <svg width="16" height="16">
                  <use href={`${icons}#icon-check-circle`} />
                </svg>
                <span>{cond}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={s.infolist}>
          <h3>Car specifications:</h3>
          <ul className={s.list}>
            <li className={s.listItem}>
              <svg width="16" height="16" className={s.svg}>
                <use href={`${icons}#icon-calendar`} />
              </svg>
              <span>Year: {year}</span>
            </li>
            <li className={s.listItem}>
              <svg width="16" height="16" className={s.svg}>
                <use href={`${icons}#icon-car`} />
              </svg>
              <span>Type: {type}</span>
            </li>
            <li className={s.listItem}>
              <svg width="16" height="16" className={s.svg}>
                <use href={`${icons}#icon-fuel-pump`} />
              </svg>
              <span></span>
              Fuel consumption: {fuelConsumption}
            </li>
            <li className={s.listItem}>
              <svg width="16" height="16" className={s.svg}>
                <use href={`${icons}#icon-gear`} />
              </svg>
              <span>Engine size: {engineSize}</span>
            </li>
          </ul>
        </div>

        <div className={s.infolist}>
          <h3>Accessories and Functionalities:</h3>
          <ul className={s.list}>
            {[...accessories, ...functionalities].map((item, idx) => (
              <li key={idx} className={s.listItem}>
                <svg width="16" height="16">
                  <use href={`${icons}#icon-check-circle`} />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
