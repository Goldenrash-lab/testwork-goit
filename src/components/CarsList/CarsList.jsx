import CarItem from "../CarItem/CarItem";

import { ListCarsStyled } from "./CarList.styled";
import Modal from "../Modal/Modal";
import { useState } from "react";

const CarsList = ({ filtered }) => {
  const [modal, setModal] = useState(false);
  const [modalCar, setModalCar] = useState(null);

  function openModal() {
    setModal(true);
  }
  function getCarForModal(car) {
    setModalCar(car);
  }
  function closeModal() {
    setModal(false);
    document.body.style.overflow = "auto";
  }
  if (modal) {
    document.body.style.overflow = "hidden";
  }

  return (
    <>
      <ListCarsStyled>
        {filtered.map((car) => (
          <CarItem
            key={crypto.randomUUID()}
            car={car}
            click={openModal}
            getCar={getCarForModal}
          />
        ))}
      </ListCarsStyled>
      {modal && <Modal close={closeModal} car={modalCar} />}
    </>
  );
};

export default CarsList;
