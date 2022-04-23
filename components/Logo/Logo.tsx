import Link from "next/link";
import Image from "next/image";

import aerolabLogo from "@public/aerolab.svg";
// import aerolabLogoComplete from "@public/icons/aerolabLogo.svg";

export default function Logo() {
  return (
    <Link href="/">
      <a>
        <Image alt="logo" height={39} src={aerolabLogo} width={36} />
      </a>
    </Link>
  );
}
