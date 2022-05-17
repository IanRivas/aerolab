import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  & .card {
    & > :first-child {
      display: grid;
      place-items: center;
      & .imageContainer {
        width: 50%;
        height: 200px;
        position: relative;
      }
    }
  }
`;
