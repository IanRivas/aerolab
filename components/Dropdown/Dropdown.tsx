import {useState, useEffect, useRef, startTransition} from "react";
import Image from "next/image";

import {useGetData} from "../../store/Data";

import {DropdownWrapper} from "./Dropdown.styles";

import Aeropay from "@components/Aeropay";
import blueIcon from "@public/icons/aerolabLogoBlue.svg";
import arrowDown from "@public/icons/arrowDown.svg";

function Dropdown() {
  const refPay = useRef<HTMLUListElement>(null);
  const [visible, setVisible] = useState(false);
  const {user} = useGetData();

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (visible && refPay.current && !refPay.current.contains(e.target)) {
        setVisible(false);
      }
    };

    document.addEventListener("click", checkIfClickedOutside);

    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [visible]);

  const handleClick = () => {
    startTransition(() => {
      setVisible((prev) => !prev);
    });
  };

  return (
    <DropdownWrapper>
      <button onClick={handleClick}>
        <Image alt="aerolab icon" height={32} src={blueIcon} width={32} />
        {user && user.points}
        <Image
          alt="arrow"
          className={visible ? "topArrow" : "downArrow"}
          height={24}
          src={arrowDown}
          width={24}
        />
      </button>
      <Aeropay refPay={refPay} visible={visible} />
    </DropdownWrapper>
  );
}

export default Dropdown;
