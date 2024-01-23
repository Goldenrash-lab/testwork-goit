import { useEffect, useRef } from "react";
import CloseIcon from "../../images/CloseIcon";
import {
  Backdrop,
  CarImg,
  CloseBtn,
  Conditions,
  ConditionsItem,
  ConditionsItemSpan,
  Description,
  Funcs,
  LabelFuncs,
  LabelSpan,
  LabelWrapper,
  ModalWindow,
  ModalWrapper,
  OptionItem,
  OptionWrapper,
  RentalBtn,
} from "./Modal.styled";

const Modal = ({ close, car }) => {
  const {
    id,
    description,
    img,
    make,
    model,
    year,
    type,
    rentalPrice: price,
    address,
    functionalities: funcs,
    photoLink,
    engineSize,
    fuelConsumption,
    accessories,
    rentalConditions,
    mileage,
  } = car;

  const newAddress = address.split(",");
  const oldConditions = rentalConditions.split("\n");
  const testCond = oldConditions[0].split(":");
  oldConditions.splice(0, 1);

  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        close();
      }
    };

    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        close();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [close]);

  // function checkMileage(mileage) {
  //   if (mileage > 999 && mileage < 10000) {
  //     const newMileage = [...mileage.toString()];
  //     newMileage.splice(1, 0, ",");
  //     return newMileage;
  //   } else if (mileage > 9999 && mileage < 100000) {
  //     const newMileage = [...mileage.toString()];
  //     newMileage.splice(2, 0, ",");
  //     return newMileage;
  //   } else if (mileage > 99999 && mileage < 1000000) {
  //     const newMileage = [...mileage.toString()];
  //     newMileage.splice(3, 0, ",");
  //     return newMileage;
  //   } else if (mileage > 999999 && mileage < 10000000) {
  //     const newMileage = [...mileage.toString()];
  //     newMileage.splice(1, 0, ",");
  //     newMileage.splice(5, 0, ",");
  //     console.log(newMileage);
  //     return newMileage;
  //   } else {
  //     return mileage;
  //   }
  // }

  return (
    <Backdrop>
      <ModalWindow ref={modalRef}>
        <CloseBtn type="button" onClick={() => close()}>
          <CloseIcon />
        </CloseBtn>
        <ModalWrapper>
          <CarImg src={img || photoLink} alt={model} />
          <LabelWrapper>
            <h4>
              {make} <LabelSpan>{model}</LabelSpan>, {year}
            </h4>
          </LabelWrapper>
          <OptionWrapper>
            <OptionItem>{newAddress[1]}</OptionItem>
            <OptionItem>{newAddress[2]}</OptionItem>
            <OptionItem>id: {id}</OptionItem>
            <OptionItem>Year: {year}</OptionItem>
            <OptionItem>Type: {type}</OptionItem>
            <OptionItem>{engineSize}</OptionItem>
            <OptionItem>{fuelConsumption}</OptionItem>
          </OptionWrapper>
          <Description>{description}</Description>
          <LabelFuncs>Accessories and functionalities:</LabelFuncs>
          <Funcs>
            {funcs.map((func) => (
              <OptionItem key={crypto.randomUUID()}>{func}</OptionItem>
            ))}
            {accessories.map((el) => (
              <OptionItem key={crypto.randomUUID()}>{el}</OptionItem>
            ))}
          </Funcs>
          <LabelFuncs>Rental Conditions: </LabelFuncs>
          <Conditions>
            <ConditionsItem>
              {testCond[0]}:
              <ConditionsItemSpan>{testCond[1]}</ConditionsItemSpan>
            </ConditionsItem>
            {oldConditions.map((cond) => (
              <ConditionsItem key={crypto.randomUUID()}>{cond}</ConditionsItem>
            ))}

            <ConditionsItem>
              Price: <ConditionsItemSpan>{price}</ConditionsItemSpan>
            </ConditionsItem>
            <ConditionsItem>
              Mileage:{" "}
              {/* <ConditionsItemSpan>{checkMileage(mileage)}</ConditionsItemSpan> */}
              <ConditionsItemSpan>
                {mileage.toLocaleString("en-US")}
              </ConditionsItemSpan>
            </ConditionsItem>
          </Conditions>
          <RentalBtn href="tel:+380730000000">Rental car</RentalBtn>
        </ModalWrapper>
      </ModalWindow>
    </Backdrop>
  );
};

export default Modal;
