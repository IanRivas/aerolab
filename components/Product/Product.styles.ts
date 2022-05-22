import styled, {keyframes} from "styled-components";

const skeletonAnimation = keyframes`
    from {
      background-color: #E6EDF7;
    }
    to {
      background-color: #DAE4F2;
    }
`;

export const Wrapper = styled.div`
  width: 100%;
  & .card {
    height: 430px;
    margin-bottom: 16px;
    border: 1px solid ${({theme}) => theme.neutral300};
    border-radius: 16px;
    & > :first-child {
      height: 80%;
      display: grid;
      place-items: center;
      & .imageContainer {
        width: 70%;
        height: 200px;
        position: relative;
        background-image: url("/icons/aerolabPlaceholder.svg");
        background-repeat: no-repeat;
        background-position: center;
      }
    }
    & > :last-child {
      padding: 16px 24px;
      border-top: 1px solid ${({theme}) => theme.neutral300};
      & h5 {
        color: ${({theme}) => theme.neutral900};
        font-size: 1.2rem;
        font-weight: 600;
      }
      & p {
        margin-top: 5px;
        color: ${({theme}) => theme.neutral600};
        font-size: 1rem;
        letter-spacing: 0.05em;
      }
    }
  }
`;

export const WrapperSkeleton = styled(Wrapper)`
  & .card {
    & > :first-child {
      & .imageContainer {
        width: 40%;
      }
    }
    & > :last-child {
      & > :first-child {
        width: 70%;
        height: 16px;
        animation: ${skeletonAnimation} 1s infinite;
      }
      & > :last-child {
        width: 30%;
        height: 8px;
        margin-top: 10px;
        animation: ${skeletonAnimation} 1s infinite;
      }
    }
  }
  & .skBtn {
    height: 59px;
    border-radius: 12px;
    animation: ${skeletonAnimation} 1s infinite;
  }
`;
