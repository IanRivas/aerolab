import {useState, useEffect} from "react";
import Image from "next/image";

import {useGetData} from "../../store/Data";

import {Wrapper} from "./Product.styles";

import RedeemBtn from "@components/RedeemBtn";
import type {Product as ProductType} from "types";

const token = process.env.NEXT_PUBLIC_TOKEN;

type props = {
  pro: ProductType;
};

type stateReddem = "default" | "processing" | "disabled";

export default function Product({pro}: props) {
  const [redeem, setRedeem] = useState<stateReddem>("default");
  const {category, cost, img, name, _id: id} = pro;
  const {user, setUser} = useGetData();

  const handleRedeem = () => {
    setRedeem("processing");
    fetch("https://coding-challenge-api.aerolab.co/redeem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({productId: id}),
    })
      .then(() => {
        fetch("https://coding-challenge-api.aerolab.co/user/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((data) => setUser(data));
      })
      .catch((err) => console.log(err));
  };

  return (
    <Wrapper>
      <div className="card">
        <div>
          <div className="imageContainer">
            <Image alt="product image" layout="fill" src={img.hdUrl} />
          </div>
        </div>
        <div className="nameContainer">
          <h5>{name}</h5>
          <p>{category}</p>
        </div>
      </div>
      <RedeemBtn cost={cost} type={redeem} onClick={handleRedeem} />
    </Wrapper>
  );
}
