import styled from "styled-components";

export const ToastWrapper = styled.div`
  width: 340px;
  min-height: 80px;
  background-color: ${({theme}) => theme.white};
  position: fixed;
  left: 20px;
  bottom: 20px;
  border: 2px solid ${({theme}) => theme.green};
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  z-index: 2;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    & > :last-child {
      font-size: 1.1rem;
      font-weight: 600;
      color: ${({theme}) => theme.neutral600};
      & > span {
        color: ${({theme}) => theme.neutral900};
      }
    }
  }
  & > button {
    width: 24px;
    height: 24px;
    border: none;
    background-color: ${({theme}) => theme.white};
    cursor: pointer;
    position: relative;
  }
  @media (min-width: 600px) {
    width: 532px;
  }
`;

export const ToastErrorWrapper = styled(ToastWrapper)`
  border: 2px solid ${({theme}) => theme.red};
`;
