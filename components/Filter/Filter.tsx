import {useState, useRef, useEffect, startTransition} from "react";
import Image from "next/image";

import {FilterWrapper} from "./Filter.styles";

import filterIcon from "@public/icons/filterIcon.svg";

type filters = "All Products" | "Gaming" | "Audio" | "Smart Home" | "Monitors & TV";

interface Props {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<filters>>;
}

export default function Filter({filter, setFilter}: Props) {
  const refOptions = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (visible && refOptions.current && !refOptions.current.contains(e.target)) {
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

  const handleFilter = (filterType: filters) => {
    if (filter !== filterType) {
      setFilter(filterType);
      handleClick();
    }
  };

  return (
    <FilterWrapper>
      <button onClick={handleClick}>
        <span>{filter}</span>
        <Image alt="arrow" height={24} src={filterIcon} width={24} />
      </button>
      <div ref={refOptions} className={visible ? "visible" : "noVisible"}>
        <button onClick={() => handleFilter("All Products")}>All Products</button>
        <button onClick={() => handleFilter("Gaming")}>Gaming</button>
        <button onClick={() => handleFilter("Audio")}>Audio</button>
        <button onClick={() => handleFilter("Smart Home")}>Smart Home</button>
        <button onClick={() => handleFilter("Monitors & TV")}>Monitors & TV</button>
      </div>
    </FilterWrapper>
  );
}
