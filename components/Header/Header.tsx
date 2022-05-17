import Image from "next/image";

import Navbar from "../Navbar";

import cardData from "./cardData";
import {Wrapper, HeroImage} from "./Header.styles";

import Card from "@components/Card";
import hero from "@public/hero.png";
import arrow from "@public/icons/arrowSimpleDown.svg";

export default function Header({refProducts}: {refProducts: any}) {
  return (
    <Wrapper>
      <Navbar />
      <div className="title">
        <div>
          <p>EXPLORE THE</p>
          <h2>
            <span>TECH</span>ZONE
          </h2>
          <p>
            Here you’ll be able to redeem all of your hard-earned Aeropoints and exchange them for
            cool tech.
          </p>
        </div>
        <button onClick={() => refProducts.current.scrollIntoView({behavior: "smooth"})}>
          <span>VIEW ALL PRODUCTS</span>
          <Image alt="arrow down icon" src={arrow} />
        </button>
      </div>
      <div className="hero">
        <div>
          <HeroImage alt="hero image" layout="fill" src={hero} />
        </div>
        {cardData &&
          cardData.map((value, index) => (
            <Card key={index} img={value.img} text={value.text} title={value.title} />
          ))}
        ;
      </div>
    </Wrapper>
  );
}
