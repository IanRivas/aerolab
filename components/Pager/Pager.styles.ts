import styled from "styled-components";

export const PagerWrapper = styled.div`
  min-width: 259px;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-radius: 16px;
  border: 1px solid ${({theme}) => theme.neutral300};
  & > span {
    color: ${({theme}) => theme.neutral600};
    font-size: 1.1rem;
    font-weight: 600;
    & > span {
      background: ${({theme}) => theme.brandBg};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
  & > button {
    width: 40px;
    height: 40px;
    padding: 8px;
    cursor: pointer;
    border: none;
    border-radius: 8px;
  }
  & > :first-child {
    transform: rotate(-180deg);
  }
  & .active {
    background-color: ${({theme}) => theme.brandLight};
  }
  & .disabled {
    background-color: ${({theme}) => theme.neutral200};
    cursor: default;
  }
  & .active:hover {
    background-color: ${({theme}) => theme.brandLight2};
  }
`;
