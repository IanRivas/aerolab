// import React from 'react'
import Image from "next/image";

import {Wrapper, WrapperProcessing, WrapperDisabled} from "./RedeemBtn.styles";

import logoWhite from "@public/icons/aerolabLogoWhite.svg";

type props = {
  type: string;
  cost: number;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function RedeemBtn({onClick, type, cost}: props) {
  if (type === "disabled") {
    return (
      <WrapperDisabled>
        <span>hola</span>
      </WrapperDisabled>
    );
  }

  return (
    <>
      {type === "processing" ? (
        <WrapperProcessing>
          <span>Processing...</span>
        </WrapperProcessing>
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
