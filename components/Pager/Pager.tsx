import Image from "next/image";

import {PagerWrapper} from "./Pager.styles";

import activeArrow from "@public/icons/activeArrowRight.svg";
import disabledArrow from "@public/icons/disabledArrowRight.svg";

interface props {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  finalPage: number;
}

export default function Pager({page, setPage, finalPage}: props) {
  return (
    <PagerWrapper>
      <button
        className={page > 0 ? "active" : "disabled"}
        onClick={() => (page > 0 ? setPage(page - 1) : null)}
      >
        <Image alt="arrow icon button" src={page > 0 ? activeArrow : disabledArrow} />
      </button>
      <span>
        Page{" "}
        <span>
          {page + 1} of {finalPage + 1}
        </span>
      </span>
      <button
        className={finalPage > page ? "active" : "disabled"}
        onClick={() => (finalPage > page ? setPage(page + 1) : null)}
      >
        <Image alt="arrow icon button" src={finalPage > page ? activeArrow : disabledArrow} />
      </button>
    </PagerWrapper>
  );
}
