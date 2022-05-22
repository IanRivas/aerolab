import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 3rem auto;
  display: grid;
  width: min(90%, 1464px);
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
  place-items: center;
  gap: 25px;
`;

export const Button = styled.button`
  display: block;
  background-color: #ededed;
  min-width: 163px;
  height: 48px;
  color: #176feb;
  background-color: #e6f0ff;
  font-size: 1.2rem;
  border-radius: 20.5px;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

export const SortFilterContainer = styled.div`
  width: min(90%, 1464px);
  margin: 0 auto;
  & > :first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & .filter {
      display: flex;
      align-items: center;
      margin-bottom: 24px;
      & > span {
        display: none;
      }
    }
    & .sort {
      display: none;
      padding-bottom: 6px;
      flex-wrap: nowrap;
      padding-left: 40px;
      border-left: 2px solid ${({theme}) => theme.neutral300};
      & > span {
        display: block;
      }
      & .select {
        background: ${({theme}) => theme.brandBg};
        -webkit-text-fill-color: ${({theme}) => theme.neutral100};
        -webkit-background-clip: initial;
        background-clip: initial;
      }
    }
    & > :last-child {
      display: none;
    }
  }
  & .sort2 {
    display: flex;
    margin: 0 auto;
    padding-bottom: 6px;
    flex-wrap: nowrap;
    overflow-x: auto;
    & > span {
      display: none;
    }
    & .select {
      background: ${({theme}) => theme.brandBg};
      -webkit-text-fill-color: ${({theme}) => theme.neutral100};
      -webkit-background-clip: initial;
      background-clip: initial;
    }
  }
  @media (min-width: 1000px) {
    & > :first-child {
      & > :last-child {
        display: flex;
      }
    }
  }
  @media (min-width: 1364px) {
    & > :first-child {
      & .filter {
        margin-bottom: 0;
        & > span {
          display: block;
          min-width: 70px;
        }
      }
      & .sort {
        display: flex;
        align-items: center;
        gap: 16px;
      }
      & > :last-child {
        display: flex;
      }
    }
    & .sort2 {
      display: none;
    }
  }
`;

export const H2 = styled.h2`
  width: min(90%, 1464px);
  font-size: 2rem;
  font-weight: 900;
  line-height: 80%;
  margin: 80px auto 40px;
  color: ${({theme}) => theme.neutral900};
  & span {
    background: ${({theme}) => theme.brandBg};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const BottomPager = styled.div`
  width: min(90%, 1464px);
  margin: 3rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  & > :last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({theme}) => theme.neutral600};
    & > span {
      background: ${({theme}) => theme.brandBg};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-right: 4px;
    }
  }
  @media (min-width: 1200px) {
    justify-content: start;
    flex-direction: row-reverse;
    & > :last-child {
      margin: 0 auto;
    }
  }
`;
