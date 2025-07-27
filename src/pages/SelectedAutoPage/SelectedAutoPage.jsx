import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarById } from "../../redux/operations";
import { selectSelectedCar } from "../../redux/selectors";
import CarDetails from "../../components/CarDetails/CarDetails";
import RentalForm from "../../components/RentalForm/RentalForm";
import s from "./SelectedAutoPage.module.css";

const SelectedCarPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const car = useSelector(selectSelectedCar);

  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [dispatch, id]);

  if (!car) return <div>Loading...</div>;

  return (
    <div className={s.selectedCarPage}>
      <div className={s.left}>
        <img
          src={car.img}
          alt={`${car.brand} ${car.model}`}
          className={s.carImage}
        />
        <RentalForm />
      </div>

      <div className={s.right}>
        <CarDetails car={car} />
      </div>
    </div>
  );
};

export default SelectedCarPage;
