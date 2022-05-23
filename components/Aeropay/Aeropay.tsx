import {useState} from "react";
import Image from "next/image";

import {useGetData} from "../../store/Data";

import {Wrapper} from "./Aeropay.styles";

import aerolabIconWhite from "@public/icons/aerolabLogoWhite.svg";

type props = {
  refPay: any;
  visible: boolean;
};

type PosiblePoints = 1000 | 5000 | 7500;

const token = process.env.NEXT_PUBLIC_TOKEN;

export default function Aeropay({refPay, visible}: props) {
  const {user, setUser} = useGetData();
  const [points, setPoints] = useState<PosiblePoints>(5000);
  const addPoints = async () => {
    const [message, userData] = await Promise.all([
      fetch("https://coding-challenge-api.aerolab.co/user/points", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({amount: points}),
      }),
      fetch("https://coding-challenge-api.aerolab.co/user/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    ]);
    const newUserData = await userData.json();

    console.log(message);
    setUser(newUserData);
  };

  return (
    <Wrapper ref={refPay} visible={visible}>
      <h3>Add Balance</h3>
      <div>
        <div className="creditCard">
          <div>
            <h4>Aerocard</h4>
            <Image alt="AerolabIcon white" src={aerolabIconWhite} />
          </div>
          <div>
            <h4>{user && user.name}</h4>
            <span>
              {user && user.createDate && user.createDate.substring(5, 10).replace("-", "/")}
            </span>
          </div>
          <div />
        </div>
      </div>
      <div className="buttons">
        <div>
          <button className={points === 1000 ? "select" : null} onClick={() => setPoints(1000)}>
            1000
          </button>
          <button className={points === 5000 ? "select" : null} onClick={() => setPoints(5000)}>
            5000
          </button>
          <button className={points === 7500 ? "select" : null} onClick={() => setPoints(7500)}>
            7500
          </button>
        </div>
        <button onClick={addPoints}>
          <Image alt="AerolabIcon white" src={aerolabIconWhite} />
          Add Points
        </button>
      </div>
    </Wrapper>
  );
}
