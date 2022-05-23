import Image from "next/image";

import {ToastWrapper, ToastErrorWrapper} from "./Toast.styles";

import toastSuccess from "public/icons/toastSuccess.svg";
import toastError from "public/icons/toastError.svg";
import closeIcon from "public/icons/closeIcon.svg";

interface props {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

interface toastProps extends props {
  productName: string;
}

export default function Toast({productName, visible, setVisible}: toastProps) {
  return (
    <>
      {visible && (
        <ToastWrapper>
          <div>
            <Image alt="success icon" src={toastSuccess} />
            <span>
              <span>{productName}</span> redeemed successfully
            </span>
          </div>
          <button onClick={() => setVisible(false)}>
            <Image alt="close icon" layout="fill" src={closeIcon} />
          </button>
        </ToastWrapper>
      )}
    </>
  );
}

export function ToastError({visible, setVisible}: props) {
  return (
    <>
      {visible && (
        <ToastErrorWrapper>
          <div>
            <Image alt="error icon" src={toastError} />
            <span>There was a problem with the transaction</span>
          </div>
          <button onClick={() => setVisible(false)}>
            <Image alt="close icon" layout="fill" src={closeIcon} />
          </button>
        </ToastErrorWrapper>
      )}
    </>
  );
}
