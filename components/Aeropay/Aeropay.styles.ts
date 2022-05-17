import styled from "styled-components";

export const Wrapper = styled.div<{visible: boolean}>`
  width: 312px;
  margin: 0;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: absolute;
  right: 0;
  top: calc(80% + 0.8rem);
  background-color: ${({theme}) => theme.white};
  padding: 0.75rem 0;
  border-radius: 16px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  opacity: ${(props) => (props.visible ? 1 : 0)};
  /* pointer-events: ${(props) => (props.visible ? "auto" : "none")}; */
  transform: ${(props) => (props.visible ? "translateY(0)" : "translateY(-20px)")};
  transition: opacity 400ms ease-in-out, transform 400ms ease-in-out;
  & > h3 {
    padding: 16px 24px;
    border-bottom: 1px solid ${({theme}) => theme.neutral300};
  }
  & > :nth-child(2) {
    padding: 24px;
    .creditCard {
      background-color: ${({theme}) => theme.neutral900};
      height: 148px;
      border-radius: 8px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      & div {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        & h4 {
          color: ${({theme}) => theme.neutral100};
          font-weight: 600;
          font-size: 1.1rem;
        }
      }
      & :last-child {
        & h4 {
          font-size: 0.9rem;
        }
        & span {
          color: ${({theme}) => theme.neutral100};
          font-size: 0.9rem;
          font-weight: 600;
        }
      }
    }
  }
  & .buttons {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    padding: 0 24px 24px 24px;
    & div {
      display: flex;
      gap: 4px;
      & button {
        height: 35px;
        flex-grow: 1;
        border-radius: 12px;
        border: none;
        font-size: 1.1rem;
        color: #176feb;
        background-color: #e6f0ff;
        cursor: pointer;
      }
      & .select {
        background: ${({theme}) => theme.brandBg};
        -webkit-text-fill-color: ${({theme}) => theme.neutral100};
        -webkit-background-clip: initial;
        background-clip: initial;
      }
    }
    & > button {
      height: 51px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 12px 16px;
      margin-top: 24px;
      background: ${({theme}) => theme.brandBg};
      border-radius: 16px;
      gap: 8px;
      font-size: 1.1rem;
      font-weight: 600;
      color: ${({theme}) => theme.white};
      cursor: pointer;
    }
  }
`;
