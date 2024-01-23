import styled from "styled-components";

export const ItemCar = styled.li`
  max-width: 274px;
  &.active > div > button {
    svg {
      fill: red;
      stroke: red;
    }
  }
`;
export const ImgWrapper = styled.div`
  position: relative;
  max-height: 268px;
  /* svg {
   
  } */
`;
export const HeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;
  color: #121417;

  font-family: Manrope-Medium;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
`;
export const ListStyle = styled.ul`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-top: 9px;
  margin-bottom: 29px;
`;
export const ItemStyle = styled.li`
  color: rgba(18, 20, 23, 0.5);

  font-family: Manrope-Regular;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px; /* 150% */
  border-right: 1px solid rgba(18, 20, 23, 0.1);
  padding-right: 6px;
  &:last-child {
    border-right: none;
  }
`;
export const LabelCar = styled.h4``;
export const LabelSpanCar = styled.span`
  color: #3470ff;
  font-family: Manrope-Medium;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;
export const Price = styled.p``;
export const Option = styled.p``;
export const Btn = styled.button`
  border-radius: 12px;
  background: #3470ff;
  border: none;
  cursor: pointer;
  color: white;
  padding: 12px 99px;
  width: 274px;
  height: 44px;

  color: var(--White, #fff);
  font-family: Manrope-SemiBold;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  transition: background 0.3s;
  &:hover {
    background: #0b44cd;
  }
`;
export const ImgCar = styled.img`
  width: 274px;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
`;
export const BtnHeart = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  background-color: transparent;
  border: none;
  outline: none;

  cursor: pointer;

  transition: all 0.2s;
  svg {
    fill: ${(props) => (props.$checked ? "#3470ff" : "ffffffcc")};
    stroke: ${(props) => (props.$checked ? "#3470ff" : "ffffffcc")};
    transition: all 0.2s;
    path {
      fill: ${(props) => (props.$checked ? "#3470ff" : "ffffffcc")};
      stroke: ${(props) => (props.$checked ? "#3470ff" : "ffffffcc")};
      transition: all 0.2s;
    }
  }

  &:hover {
    svg {
      fill: #3470ff;
      stroke: #3470ff;
      path {
        fill: #3470ff;
        stroke: #3470ff;
      }
    }
  }
`;
