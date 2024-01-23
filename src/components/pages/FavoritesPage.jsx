import { useDispatch, useSelector } from "react-redux";
import CarsList from "../CarsList/CarsList";
import { selectFavCars } from "../../store/favoritesCars/selectors";
import { useCallback, useEffect, useState } from "react";
import { getAllCar } from "../../store/cars/thunk";
const FavoritesPage = () => {
  const favCars = useSelector(selectFavCars);
  const dispatch = useDispatch();

  const [filtered, setFiltered] = useState(null);
  // const [cars, setCars] = useState(null);

  const addToFiltered = useCallback(
    (cars) => {
      const findCars = [];

      const dataFromLS = JSON.parse(localStorage.getItem("persist:favCars"))
        .favCars.replace("[", "")
        .replace("]", "")
        .split(",");

      if (!favCars?.length > 0) {
        dataFromLS.forEach((el) => {
          findCars.push(cars.find((car) => car.id === el));
        });
      } else {
        favCars.forEach((el) => {
          findCars.push(cars.find((car) => car.id === el));
        });
      }
      if (dataFromLS[0]) {
        setFiltered(findCars);
      } else {
        setFiltered(null);
      }
    },
    [favCars]
  );

  useEffect(() => {
    dispatch(getAllCar(1))
      .unwrap()
      .then((res) => {
        addToFiltered(res);
      });
  }, [addToFiltered, dispatch]);

  // console.log("cars", cars);

  return (
    <section>
      <h2>Your favorites cars:</h2>
      {filtered && <CarsList filtered={filtered} checked={true} />}
    </section>
  );
};

export default FavoritesPage;
