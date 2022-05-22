// import React from 'react'
import Image from "next/image";

import {Wrapper, WrapperProcessing, WrapperDisabled} from "./RedeemBtn.styles";

import logoGray from "@public/icons/redeemGray.svg";
import logoWhite from "@public/icons/redeemWhite.svg";

type props = {
  cost: number;
  processing: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  userPoints: number;
};

export default function RedeemBtn({processing, cost, onClick, userPoints}: props) {
  if (processing) {
    return (
      <WrapperProcessing>
        <span>Processing...</span>
      </WrapperProcessing>
    );
  }

  return (
    <>
      {userPoints < cost ? (
        <WrapperDisabled>
          <span>
            You need
            <Image alt="aerolab logo" src={logoGray} />
            {cost - userPoints}
          </span>
        </WrapperDisabled>
      ) : (
        <Wrapper onClick={onClick}>
          <span>
            Redeem for
            <Image alt="aerolab logo" src={logoWhite} />
            {cost}
          </span>
        </Wrapper>
      )}
    </>
  );
}
