import { useSelector, useDispatch } from "react-redux";
import { selectCars, selectFilters } from "../../redux/selectors";
import { setFilters } from "../../redux/slice";
import CarCard from "../CarCard/CarCard";
import s from "./CarsList.module.css";

const CarsList = () => {
  const cars = useSelector(selectCars);
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    dispatch(setFilters({ ...filters, page: Number(filters.page) + 1 }));
  };

  return (
    <div className={s.carsListContainer}>
      <div className={s.carsList}>
        {Array.isArray(cars.cars) &&
          cars.cars.map((car) => <CarCard key={car.id} car={car} />)}
      </div>

      {Array.isArray(cars.cars) && cars.page < cars.totalPages && (
        <button className={s.button} onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default CarsList;
