import styled from "styled-components";

export const Wrapper = styled.div`
  width: 335px;
  min-height: 395px;
  border: 1px solid ${({theme}) => theme.neutral300};
  box-shadow: 0px 2px 40px rgba(0, 0, 0, 0.05);
  border-radius: 32px;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 12px;
  z-index: 1;
  & .cardImage {
    border-radius: 24px 24px 0px 0px;
    border: 1px solid ${({theme}) => theme.neutral300};
    background: ${({theme}) => theme.specialIlustraBG};
  }
  & .cardText {
    padding: 16px 24px 24px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 12px;
    border: 1px solid ${({theme}) => theme.neutral300};
    border-radius: 0px 0px 24px 24px;
    & .cardTitle {
      display: flex;
      align-items: center;
      gap: 16px;
      & > div:first-of-type {
        width: 40px;
        height: 40px;
        background-color: ${({theme}) => theme.brandLight};
        border-radius: 8px;
        display: grid;
        place-items: center;
      }
      & h4 {
        font-size: 1.5rem;
        background: ${({theme}) => theme.brandBg};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-weight: 900;
      }
    }
    & > p {
      color: ${({theme}) => theme.neutral600};
      font-weight: 600;
    }
  }
  @media (min-width: 1364px) {
    width: 532px;
    height: 676px;
    position: absolute;
    & .cardImage {
      height: 82%;
      border-radius: 24px 24px 0px 0px;
      border: 1px solid ${({theme}) => theme.neutral300};
      background: ${({theme}) => theme.specialIlustraBG};
    }
    & .cardText {
      padding: 16px 24px 24px;
      background-color: #ffffff;
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 12px;
      border: 1px solid ${({theme}) => theme.neutral300};
      border-radius: 0px 0px 24px 24px;
      & .cardTitle {
        display: flex;
        align-items: center;
        gap: 16px;
        & > div:first-of-type {
          width: 40px;
          height: 40px;
          background-color: ${({theme}) => theme.brandLight};
          border-radius: 8px;
          display: grid;
          place-items: center;
        }
        & h4 {
          font-size: 1.5rem;
          background: ${({theme}) => theme.brandBg};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 900;
        }
      }
      & > p {
        color: ${({theme}) => theme.neutral600};
        font-weight: 600;
      }
    }
  }
`;
