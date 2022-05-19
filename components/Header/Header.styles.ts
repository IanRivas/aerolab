import styled from "styled-components";
import Image from "next/image";

export const Wrapper = styled.div`
  margin-top: 128px;
  & .title {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    padding: 36px 0 116px;
    & > div {
      padding: 0 24px;
      & > :first-child {
        letter-spacing: 0.24em;
      }
      & p {
        color: ${({theme}) => theme.neutral600};
        font-size: 1rem;
        font-weight: 600;
        text-align: center;
        line-height: 150%;
      }
      & h2 {
        font-size: 6rem;
        font-weight: 900;
        text-align: center;
        line-height: 80%;
        margin: 8px 0 24px;
        color: ${({theme}) => theme.neutral900};
        & span {
          display: block;
          background: ${({theme}) => theme.brandBg};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      }
    }
    & > button {
      height: 64px;
      width: 90%;
      margin: 40px 16px;
      padding: 1px;
      border-radius: 24px;
      background: ${({theme}) => theme.brandBg};
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      cursor: pointer;
      & span {
        color: ${({theme}) => theme.white};
        font-weight: 600;
        font-size: 1.05rem;
      }
    }
  }
  & .hero {
    background: ${({theme}) => theme.specialSectionBG};
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 400px 20px 32px;
    gap: 24px;
    & > div:first-of-type {
      position: absolute;
      width: 580px;
      height: 518px;
      inset: 0;
      top: -90px;
      left: -100px;
    }
  }
`;

export const HeroImage = styled(Image)`
  width: 580px;
  height: 518px;
  position: absolute;
  top: 0;
`;
