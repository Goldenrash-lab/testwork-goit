import HeartSvg from "../../images/HeartSvg";

import {
  Btn,
  BtnHeart,
  HeadWrapper,
  ImgCar,
  ImgWrapper,
  ItemCar,
  ItemStyle,
  LabelCar,
  LabelSpanCar,
  ListStyle,
  Option,
  Price,
} from "./CarItem.styled";
import { useDispatch, useSelector } from "react-redux";
import { toggleHeart } from "../../store/favoritesCars/slice";
import { useLocation } from "react-router-dom";
import { CloseBtn } from "../Modal/Modal.styled";
import CloseIcon from "../../images/CloseIcon";
import { selectFavCars } from "../../store/favoritesCars/selectors";
const CarItem = ({ car, click, getCar }) => {
  const dispatch = useDispatch();

  const favCars = useSelector(selectFavCars);

  const {
    id,
    img,
    make,
    model,
    year,
    type,
    rentalPrice: price,
    address,
    rentalCompany: company,
    functionalities: funcs,
    photoLink,
  } = car;
  const newAddress = address.split(",");

  function checkLength(word) {
    if (word.length > 20) {
      return word.slice(0, 20) + "...";
    }
  }
  function handleClick() {
    click();
    getCar(car);
  }

  const location = useLocation();

  const checked = favCars.includes(id) ? { $checked: true } : null;

  function addToFavorites(id) {
    dispatch(toggleHeart(id));
  }

  return (
    <ItemCar id={id}>
      <ImgWrapper>
        <ImgCar src={img || photoLink} alt={model} />
        {location.pathname === "/favorites" ? (
          <CloseBtn
            onClick={() => dispatch(toggleHeart(id))}
            style={{
              backgroundColor: "transparent",
              zIndex: "99",
              width: "25px",
              height: "25px",
            }}
          >
            <CloseIcon stroke="white" />
          </CloseBtn>
        ) : (
          <BtnHeart
            {...checked}
            type="button"
            onClick={() => addToFavorites(id)}
          >
            <HeartSvg />
          </BtnHeart>
        )}
      </ImgWrapper>
      <HeadWrapper>
        <LabelCar>
          {make} <LabelSpanCar>{model}</LabelSpanCar>, {year}
        </LabelCar>
        <Price>{price}</Price>
      </HeadWrapper>
      <ListStyle>
        <ItemStyle>
          <Option>{newAddress[1]}</Option>
        </ItemStyle>
        <ItemStyle>
          <Option>{newAddress[2]}</Option>
        </ItemStyle>
        <ItemStyle>
          <Option>{company}</Option>
        </ItemStyle>
        <ItemStyle>
          <Option>{type}</Option>
        </ItemStyle>
        <ItemStyle>
          <Option>{model}</Option>
        </ItemStyle>

        <ItemStyle>
          <Option>{checkLength(funcs[0])}</Option>
        </ItemStyle>
      </ListStyle>
      <Btn type="button" onClick={handleClick}>
        Learn more
      </Btn>
    </ItemCar>
  );
};

export default CarItem;
