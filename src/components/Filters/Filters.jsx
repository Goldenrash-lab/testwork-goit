import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Form,
  InputFrom,
  InputTo,
  InputWrapper,
  Label,
  SelectBrand,
  SelectPrice,
  TextInput,
} from "./Filters.styled";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { getCategories } from "../../store/categories/thunk";
import {
  selectCategories,
  selectPrices,
} from "../../store/categories/selectors";
import { toast } from "react-toastify";

const Filters = ({ filter }) => {
  const [brands, setBrands] = useState([]);
  const [prices, setPrices] = useState([]);
  const [selectBrand, setSelectBrand] = useState(null);
  const [selectPrice, setSelectPrice] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories())
      .unwrap()
      .then(() => {})
      .catch((error) => toast.error(error));
  }, [dispatch]);

  const categories = useSelector(selectCategories);
  const price = useSelector(selectPrices);
  function unique(arr) {
    let result = [];

    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }

    return result;
  }

  const { register, handleSubmit } = useForm();
  useEffect(() => {
    const filtrPrices = unique(price);
    const filtrCats = unique(categories);

    if (filtrCats) {
      setBrands(
        filtrCats.map((cat) => {
          return { value: cat.toLowerCase(), label: cat };
        })
      );
      setPrices(
        filtrPrices.map((price) => {
          return { value: price, label: price };
        })
      );
    }
  }, [categories, price]);

  function submit(data) {
    const newData = {
      ...data,
      brand: selectBrand?.value ?? "",
      price: selectPrice?.value ?? "",
    };
    filter(newData);
  }

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <Label>
        Car brand
        <SelectBrand
          components={{
            IndicatorSeparator: () => null,
          }}
          onChange={setSelectBrand}
          options={[{ value: "", label: "All Cars" }, ...brands]}
          placeholder="Enter the text"
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? "#3470ff" : "transparent",
              backgroundColor: "#F7F7FB",
              borderRadius: "14px",
              height: "48px",
            }),
            option: (b) => ({
              ...b,
              color: "rgba(18, 20, 23, 0.20)",
              cursor: "pointer",
            }),
            menu: (styles) => ({
              ...styles,
              borderRadius: "14px",
            }),
            menuList: (styles) => ({
              ...styles,
              borderRadius: "14px",
              "::-webkit-scrollbar": {
                width: "8px",
              },
              "::-webkit-scrollbar-track": {
                borderRadius: "10px",

                background: "rgba(255, 255, 255, 0.05)",
              },
              "::-webkit-scrollbar-thumb": {
                borderRadius: "10px",

                background: "rgba(18, 20, 23, 0.05)",
              },
              "::-webkit-scrollbar-thumb:hover": {
                borderRadius: "10px",

                background: "rgba(7, 8, 9, 0.05)",
              },
            }),
          }}
        />
      </Label>
      <Label>
        Price/ 1 hour
        <SelectPrice
          components={{
            IndicatorSeparator: () => null,
          }}
          onChange={setSelectPrice}
          options={[{ value: "", label: "All Prices" }, ...prices]}
          placeholder="To"
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? "#3470ff" : "transparent",
              backgroundColor: "#F7F7FB",
              borderRadius: "14px",
              height: "48px",
            }),
            option: (b) => ({
              ...b,
              color: "rgba(18, 20, 23, 0.20)",
              cursor: "pointer",
            }),
            menu: (styles) => ({
              ...styles,
              borderRadius: "14px",
            }),
            menuList: (styles) => ({
              ...styles,
              borderRadius: "14px",
              "::-webkit-scrollbar": {
                width: "8px",
              },
              "::-webkit-scrollbar-track": {
                borderRadius: "10px",

                background: "rgba(255, 255, 255, 0.05)",
              },
              "::-webkit-scrollbar-thumb": {
                borderRadius: "10px",

                background: "rgba(18, 20, 23, 0.05)",
              },
              "::-webkit-scrollbar-thumb:hover": {
                borderRadius: "10px",

                background: "rgba(7, 8, 9, 0.05)",
              },
            }),
          }}
        />
      </Label>
      <TextInput>
        <p>Сar mileage / km</p>
        <InputWrapper>
          <div>
            <InputFrom type="text" name="from" {...register("from")} />
          </div>
          <div>
            <InputTo type="text" name="to" {...register("to")} />
          </div>
        </InputWrapper>
      </TextInput>
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default Filters;
