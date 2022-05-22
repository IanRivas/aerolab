import Image from "next/image";

import Navbar from "../Navbar";

import cardData from "./cardData";
import {Wrapper, HeroImage} from "./Header.styles";

import useWindowDimensions from "hooks/useWindowDimensions";
import Card from "@components/Card";
import hero from "@public/images/hero.png";
import heroDesktop from "@public/images/hero-desktop.png";
import arrow from "@public/icons/arrowSimpleDown.svg";

export default function Header({refProducts}: {refProducts: any}) {
  const {width} = useWindowDimensions();

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
          <button onClick={() => refProducts.current.scrollIntoView({behavior: "smooth"})}>
            <span>VIEW ALL PRODUCTS</span>
            <Image alt="arrow down icon" src={arrow} />
          </button>
        </div>
        <div>
          <div />
          <div>
            <Image alt="hero image" layout="fill" src={heroDesktop} />
          </div>
        </div>
      </div>
      <div className="hero">
        <div>
          <HeroImage alt="hero image" layout="fill" src={hero} />
        </div>
        {cardData &&
          cardData.map((value, index) => (
            <Card
              key={index}
              img={width > 1364 ? value.imgDesktop : value.img}
              text={value.text}
              title={value.title}
            />
          ))}
        ;
      </div>
    </Wrapper>
  );
}
