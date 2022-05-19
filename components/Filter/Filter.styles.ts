import styled, {keyframes} from "styled-components";

const moveDown = keyframes`
    from {
        transform: translateY(-50px);
    } to {
        transform: translateY(0);
    }
`;

export const FilterWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  & > button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 335px;
    height: 56px;
    padding: 16px 8px 16px 24px;
    background-color: ${({theme}) => theme.white};
    border-radius: 16px;
    border: 1px solid ${({theme}) => theme.neutral300};
    cursor: pointer;
    overflow: hidden;
    z-index: 1;
    & > span {
      font-size: 1rem;
      font-weight: 600;
      color: ${({theme}) => theme.neutral600};
    }
  }
  & .visible {
    width: 335px;
    display: flex;
    position: absolute;
    flex-direction: column;
    padding: 8px 1px;
    margin-top: 8px;
    background-color: ${({theme}) => theme.white};
    border-radius: 16px;
    border: 1px solid ${({theme}) => theme.neutral300};
    animation: ${moveDown} 300ms linear;
    & > button {
      height: 51px;
      padding: 12px 24px;
      background-color: ${({theme}) => theme.white};
      border: none;
      text-align: left;
      cursor: pointer;
    }
    & > button:hover {
      background-color: ${({theme}) => theme.neutral100};
    }
  }
  & .noVisible {
    display: none;
  }
`;
