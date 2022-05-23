import {useState} from "react";
import Image from "next/image";

import {useGetData} from "../../store/Data";

import {Wrapper, WrapperSkeleton} from "./Product.styles";

import Toast, {ToastError} from "components/Toast";
import RedeemBtn from "components/RedeemBtn";
import type {Product as ProductType} from "types";

const token = process.env.NEXT_PUBLIC_TOKEN;

type props = {
  pro: ProductType;
};

export default function Product({pro}: props) {
  const [processing, setProcessing] = useState(false);
  const {category, cost, img, name, _id: id} = pro;
  const {user, setUser} = useGetData();

  const [toast, setToast] = useState<boolean>(false);
  const [toastError, setToastError] = useState<boolean>(false);

  const handleRedeem = () => {
    setProcessing(true);
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
      .then(() => {
        setProcessing(false);
        setToast(true);
      })
      .catch(() => {
        setProcessing(false);
        setToastError(true);
      });
  };

  return (
    <>
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
        <RedeemBtn
          cost={cost}
          processing={processing}
          userPoints={user && user.points}
          onClick={handleRedeem}
        />
      </Wrapper>
      <Toast productName={pro.name} setVisible={setToast} visible={toast} />
      <ToastError setVisible={setToastError} visible={toastError} />
    </>
  );
}

export function CardSkeleton() {
  return (
    <WrapperSkeleton>
      <div className="card">
        <div>
          <div className="imageContainer">
            <Image alt="placeholder image" layout="fill" src="/icons/aerolabPlaceholder.svg" />
          </div>
        </div>
        <div className="nameContainer">
          <div />
          <div />
        </div>
      </div>
      <div className="skBtn" />
    </WrapperSkeleton>
  );
}
