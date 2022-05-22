import Link from "next/link";
import Image from "next/image";

import useWindowDimensions from "hooks/useWindowDimensions";
import aerolabLogo from "@public/aerolab.svg";
import aerolabLogoComplete from "@public/icons/aerolabLogo.svg";

export default function Logo() {
  const {width} = useWindowDimensions();

  return (
    <Link href="/">
      <a>
        <Image
          alt="logo"
          height={width > 1360 ? 48 : 39}
          src={width > 1360 ? aerolabLogoComplete : aerolabLogo}
          width={width > 1360 ? 126 : 36}
        />
      </a>
    </Link>
  );
}
