import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  padding: 46px 0px;
  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: none;
    background-color: ${({theme}) => theme.white};
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    & > div {
      width: 32px;
      height: 32px;
      background-image: url("icons/githubGray.svg");
    }
    & > span {
      color: ${({theme}) => theme.neutral600};
      font-size: 1.1rem;
      font-weight: 600;
    }
  }
  & > a:active {
    & > div {
      background-image: url("icons/githubBlue.svg");
    }
    & > span {
      background: ${({theme}) => theme.brandBg};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
  & > a:hover {
    background-color: ${({theme}) => theme.neutral200};
  }
`;
