import Link from "next/link";
import Image from "next/image";

import aerolabSvg from "../public/aerolab.svg";

export default function Logo() {
  return (
    <Link href="/">
      <a>
        <Image alt="logo" height={30} src={aerolabSvg} width={30} />
      </a>
    </Link>
  );
}
