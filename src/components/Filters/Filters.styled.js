import Select from "react-select";
import styled from "styled-components";

export const Form = styled.form`
  margin-top: 150px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 25px;
`;
export const Button = styled.button`
  appearance: button;
  backface-visibility: hidden;
  background-color: #405cf5;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
    rgba(50, 50, 93, 0.1) 0 2px 5px 0, rgba(0, 0, 0, 0.07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: Manrope-SemiBold;
  font-size: 14px;
  height: 44px;
  line-height: 1.15;
  margin-bottom: 2px;

  outline: none;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all 0.2s, box-shadow 0.08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  border-radius: 12px;
  background: #3470ff;
  padding: 14px 44px;
  max-width: 136px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:disabled {
    cursor: default;
  }

  &:focus {
    box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,
      rgba(50, 50, 93, 0.2) 0 6px 15px 0, rgba(0, 0, 0, 0.1) 0 2px 2px 0,
      rgba(50, 151, 211, 0.3) 0 0 0 4px;
  }
`;

export const Label = styled.label`
  color: #8a8a89;
  font-family: Manrope-Medium;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
`;
export const TextInput = styled.div`
  display: flex;
  flex-direction: column;
  color: #8a8a89;
  font-family: Manrope-Medium;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;

  line-height: 18px; /* 128.571% */
`;
export const InputWrapper = styled.div`
  display: flex;
  input {
    color: #121417;

    font-family: Manrope-Medium;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 111.111% */
  }
  & div:first-child {
    position: relative;
    &::after {
      content: "From";
      position: absolute;
      top: 22px;
      left: 20px;
      color: #121417;

      font-family: Manrope-Medium;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px; /* 111.111% */
    }
  }
  & div:last-child {
    position: relative;
    &::after {
      content: "To";
      position: absolute;
      top: 22px;
      left: 20px;
      color: #121417;

      font-family: Manrope-Medium;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px; /* 111.111% */
    }
  }
`;
export const SelectBrand = styled(Select)`
  margin-top: 8px;
  min-width: 224px;
`;
export const SelectPrice = styled(Select)`
  margin-top: 8px;
  min-width: 125px;
`;
export const InputFrom = styled.input`
  margin-top: 8px;
  border-radius: 14px 0px 0px 14px;
  display: flex;
  width: 160px;
  height: 48px;
  /* padding: 14px 93px 14px 24px; */
  align-items: center;
  background: #f7f7fb;
  border: none;

  border-right: 1px solid rgba(138, 138, 137, 0.2);
  padding-left: 67px;
  outline: none;
  &:focus-within {
    outline: 2px solid #3470ff;
  }
`;

export const InputTo = styled.input`
  margin-top: 8px;
  border-radius: 14px 0px 0px 14px;
  display: flex;
  width: 160px;
  height: 48px;
  /* padding: 14px 93px 14px 24px; */
  align-items: center;
  background: #f7f7fb;
  border: none;

  border-radius: 0px 14px 14px 0px;
  padding-left: 45px;
  outline: none;
  /* border-left: 1px solid rgba(138, 138, 137, 0.2); */
  &:focus-within {
    outline: 2px solid #3470ff;
  }
`;
