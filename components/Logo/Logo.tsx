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
        {width > 1360 ? (
          <Image alt="logo" height={48} src={aerolabLogoComplete} width={126} />
        ) : (
          <Image alt="logo" height={39} src={aerolabLogo} width={36} />
        )}
      </a>
    </Link>
  );
}
