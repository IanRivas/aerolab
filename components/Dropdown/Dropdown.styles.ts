import styled from "styled-components";

export const DropdownWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-end;
  align-items: center;
  width: 156px;
  height: 48px;
  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.white};
    background: ${({theme}) => theme.brandBg};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: blue;
    width: 170px;
    text-align: left;
    padding: 8px 16px;
    border: 1px solid blue;
    border-radius: 16px;
    font-size: 1.1rem;
    gap: 16px;
    border: 1px solid #dae4f2;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
    & img {
      padding: 0 20px;
    }
    & .topArrow {
      transform: rotate(180deg);
      transition: transform 500ms ease-in-out;
    }
    & .downArrow {
      transform: rotate(0);
      transition: transform 500ms ease-in-out;
    }
  }
`;
