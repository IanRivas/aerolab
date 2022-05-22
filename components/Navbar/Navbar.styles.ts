import styled from "styled-components";

export const Wrapper = styled.nav`
  width: 100%;
  height: 128px;
  position: fixed;
  display: flex;
  display: flex;
  align-items: center;
  padding: 10px 25px;
  background-color: #ffffff;
  top: 0;
  left: 0;
  z-index: 3;
  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (min-width: 1360px) {
    & > div {
      width: min(90%, 1464px);
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
