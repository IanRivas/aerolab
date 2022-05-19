import styled from "styled-components";

export const Wrapper = styled.button`
  width: 100%;
  height: 59px;
  background: ${({theme}) => theme.brandBg};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  border: none;
  border-radius: 16px;
  cursor: pointer;
  & > span {
    display: flex;
    align-items: center;
    color: ${({theme}) => theme.white};
    font-size: 1.1rem;
    font-weight: 500;
    gap: 8px;
    letter-spacing: 2px;
  }
  &:hover {
    background: ${({theme}) => theme.brandBgHover};
  }
`;

export const WrapperProcessing = styled(Wrapper)`
  background: linear-gradient(
    102.47deg,
    rgba(23, 111, 235, 0.7) -5.34%,
    rgba(255, 128, 255, 0.7) 106.58%
  );
`;

export const WrapperDisabled = styled(Wrapper)`
  background: ${({theme}) => theme.neutral200};
  cursor: default;
  & > span {
    color: ${({theme}) => theme.neutral600};
  }
  &:hover {
    background: ${({theme}) => theme.neutral200};
  }
`;
