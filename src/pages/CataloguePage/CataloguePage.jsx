import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCars, setFilters } from "../../redux/slice";
import { fetchCars } from "../../redux/operations";
import { selectFilters, selectBrands, selectCars } from "../../redux/selectors";
import CarFilters from "../../components/CarFilters/CarFilters";
import CarsList from "../../components/CarsList/CarsList";
import s from "./CataloguesPage.module.css";

const CataloguePage = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const brands = useSelector(selectBrands);
  const prevFiltersRef = useRef(filters);
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(
      setFilters({
        brand: "",
        rentalPrice: "",
        minMileage: "",
        maxMileage: "",
        page: 1,
      })
    );
  }, [dispatch]);

  useEffect(() => {
    const prevFilters = prevFiltersRef.current;

    const filtersChanged =
      prevFilters.brand !== filters.brand ||
      prevFilters.rentalPrice !== filters.rentalPrice ||
      prevFilters.minMileage !== filters.minMileage ||
      prevFilters.maxMileage !== filters.maxMileage;

    if (Array.isArray(brands) && brands.length > 0) {
      if (filtersChanged) {
        dispatch(clearCars());
        dispatch(setFilters({ ...filters, page: 1 }));
        dispatch(fetchCars({ ...filters, page: 1 }));
      } else {
        dispatch(fetchCars(filters));
      }
    }

    prevFiltersRef.current = filters;
  }, [dispatch, filters, brands]);

  return (
    <div>
      <CarFilters />
      {Array.isArray(cars.cars) && cars.cars.length === 0 ? (
        <p className={s.p}>No cars found!</p>
      ) : (
        <CarsList />
      )}
    </div>
  );
};

export default CataloguePage;
