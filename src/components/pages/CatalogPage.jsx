import { useDispatch, useSelector } from "react-redux";
import CarsList from "../CarsList/CarsList";
import Filters from "../Filters/Filters";
import { useCallback, useEffect, useState } from "react";
import { getAllCar, getAllCarWithFilteres } from "../../store/cars/thunk";
import { selectCars } from "../../store/cars/selectors";
import { LoadMore } from "../CarsList/CarList.styled";
import { changePage } from "../../store/cars/slice";
import { NotFound } from "./CatalogPage.styled";
import { toast } from "react-toastify";

const LIMIT = 12;

const CatalogPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [responseTotal, setResponseTotal] = useState([]);
  const cars = useSelector(selectCars);

  function getFilter(obj) {
    setQuery(obj);
  }

  useEffect(() => {
    const queryParams = {
      p: page,
      l: LIMIT,
    };
    if (query) {
      queryParams.make = query.brand;
      queryParams.rentalPrice = query.price.replace("$", "");
      queryParams.p = page;
      dispatch(changePage(page));
      dispatch(getAllCarWithFilteres(queryParams))
        .unwrap()
        .then((res) => {
          setResponseTotal(res);
        })
        .catch((error) => toast.error(error));
    } else {
      dispatch(changePage(page));
      dispatch(getAllCar(queryParams))
        .unwrap()
        .then((res) => {
          setResponseTotal(res);
        })
        .catch((error) => {
          toast.error(error);
        });
    }
  }, [dispatch, page, query]);

  // ФИЛЬТРА

  function filtersCars() {
    if (query.from && query.to) {
      const filteredCars = cars.filter(
        (el) => el.mileage >= +query.from && el.mileage <= +query.to
      );
      return filteredCars;
    } else if (query.from) {
      const filteredCars = cars.filter((el) => el.mileage >= +query.from);
      return filteredCars;
    } else if (query.to) {
      const filteredCars = cars.filter((el) => el.mileage <= +query.to);
      return filteredCars;
    } else {
      return cars;
    }
  }

  return (
    <>
      <section>
        <Filters filter={getFilter} />
        {cars ? (
          <CarsList filtered={filtersCars()} />
        ) : (
          <NotFound>Not Found</NotFound>
        )}

        {responseTotal?.length === 12 && (
          <LoadMore type="button" onClick={() => setPage(page + 1)}>
            Load more
          </LoadMore>
        )}
      </section>
    </>
  );
};

export default CatalogPage;
