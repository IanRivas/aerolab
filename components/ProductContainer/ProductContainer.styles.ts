import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 3rem auto;
  display: grid;
  width: min(90%, 1227px);
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
  place-items: center;
  gap: 25px;
`;

export const Button = styled.button`
  background-color: #ededed;
  width: 163px;
  height: 48px;
  color: #a3a3a3;
  font-size: 1.2rem;
  border-radius: 20.5px;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

export const H2 = styled.h2`
  font-size: 2rem;
  font-weight: 900;
  line-height: 80%;
  margin: 80px 21px 40px;
  color: ${({theme}) => theme.neutral900};
  & span {
    background: ${({theme}) => theme.brandBg};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;
