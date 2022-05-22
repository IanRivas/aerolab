import styled from "styled-components";
import Image from "next/image";

export const Wrapper = styled.div`
  margin-top: 128px;
  & .title {
    width: min(90%, 1464px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    padding: 36px 0 116px;
    & > div:first-of-type {
      max-width: 320px;
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
      & > button {
        height: 64px;
        width: 90%;
        max-width: 303px;
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
    & > :last-child {
      display: none;
    }
  }
  & .hero {
    background: ${({theme}) => theme.specialSectionBG};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    padding: 400px 0 32px;
    gap: 24px;
    & > div:first-of-type {
      position: absolute;
      width: 580px;
      height: 518px;
      inset: 0;
      top: -90px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  @media (min-width: 1024px) {
    & .title {
      padding: 36px 0 310px;
    }
    & .hero {
      padding: 200px 0 32px;
      flex-direction: row;
      & > div:first-of-type {
        top: -325px;
      }
    }
  }
  @media (min-width: 1364px) {
    & .title {
      padding: 112px 0 230px;
      flex-direction: row;
      & > div:first-of-type {
        max-width: 50%;
        & > p {
          width: 70%;
          text-align: left;
          font-size: 1.1rem;
        }
        & > h2 {
          font-size: 12.5rem;
          text-align: left;
          & > span {
            padding-bottom: 5px;
          }
        }
        & > button {
          margin: 40px 0;
        }
      }
      & > :last-child {
        width: 50%;
        height: 600px;
        display: block;
        position: relative;
        & > :first-child {
          border-radius: 104px;
          box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
          background: ${({theme}) => theme.specialSectionBG};
          width: 100%;
          height: 100%;
        }
        & > :last-child {
          position: absolute;
          top: -197px;
          left: 50%;
          transform: translateX(-50%);
          width: 897px;
          height: 795px;
        }
      }
    }
    & .hero {
      padding: 0 0 32px;
      position: relative;
      height: 528px;
      flex-direction: row;
      margin-bottom: 200px;
      & > div:first-of-type {
        display: none;
      }
      & > :nth-child(2) {
        right: 55%;
        transform: rotate(-4deg);
      }
      & > :nth-child(3) {
        top: -130px;
      }
      & > :last-child {
        transform: rotate(4deg);
        left: 55%;
      }
    }
  }
`;

export const HeroImage = styled(Image)`
  width: 580px;
  height: 518px;
  position: absolute;
  top: 0;
`;
