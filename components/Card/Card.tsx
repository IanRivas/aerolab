import Image, {StaticImageData} from "next/image";

import {Wrapper} from "./Card.styles";

import useWindowDimensions from "hooks/useWindowDimensions";
import cardLogo from "@public/icons/cardLogo.svg";

type props = {
  img: string | StaticImageData;
  title: string;
  text: string;
};

export default function Card({img, text, title}: props) {
  const {width} = useWindowDimensions();

  return (
    <Wrapper>
      <div className="cardImage">
        <Image
          alt="card image"
          height={width > 1364 ? 498 : 230}
          src={img}
          width={width > 1364 ? 508 : 311}
        />
      </div>
      <div className="cardText">
        <div className="cardTitle">
          <div>
            <Image alt="logo" height={26} src={cardLogo} width={26} />
          </div>
          <h4>{title}</h4>
        </div>
        <p>{text}</p>
      </div>
    </Wrapper>
  );
}
