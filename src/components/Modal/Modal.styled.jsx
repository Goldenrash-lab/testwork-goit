import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(18, 20, 23, 0.5);
  z-index: 20;
`;

export const ModalWindow = styled.div`
  position: absolute;
  border-radius: 24px;
  background: #fff;
  width: 541px;
  min-height: 752px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const CloseBtn = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  right: 16px;
  top: 16px;
  cursor: pointer;
`;

export const ModalWrapper = styled.div`
  display: "flex";
  justify-content: center;
  align-items: center;
  padding: 40px;
`;
export const CarImg = styled.img`
  border-radius: 14px;
  width: 461px;
  height: 248px;
  margin-bottom: 14px;
  object-fit: cover;
`;
export const LabelWrapper = styled.div`
  color: #121417;

  font-family: Manrope-Medium;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
  margin-bottom: 8px;
`;
export const LabelSpan = styled.span`
  color: #3470ff;

  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;
export const OptionWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 6px;
  max-width: 227px;
  flex-wrap: wrap;
  margin-bottom: 14px;
`;
export const OptionItem = styled.li`
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
export const Description = styled.p`
  color: #121417;

  font-family: Manrope-Regular;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */

  margin-bottom: 24px;
`;
export const LabelFuncs = styled.h4`
  color: #121417;

  font-family: Manrope-Medium;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  margin-bottom: 8px;
`;
export const Funcs = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 6px;
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;
export const FuncsItem = styled.li``;
export const Conditions = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 43px;
`;
export const ConditionsItem = styled.li`
  color: #363535;

  font-family: Montserrat-Regular;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 150% */
  letter-spacing: -0.24px;
  padding: 7px 14px;
  border-radius: 35px;
  background: #f9f9f9;
`;
export const ConditionsItemSpan = styled.span`
  color: #3470ff;
  font-family: Montserrat-SemiBold;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.24px;
`;
export const RentalBtn = styled.a`
  max-width: 168px;
  border-radius: 12px;
  background: #3470ff;
  cursor: pointer;
  padding: 12px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 600;
  border: none;
  font-size: 14px;
  line-height: 20px;
`;
