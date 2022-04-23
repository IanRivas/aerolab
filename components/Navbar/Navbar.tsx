import {Wrapper} from "./Navbar.styles";

import Dropdown from "@components/Dropdown";
import Logo from "@components/Logo";

export default function Navbar() {
  return (
    <Wrapper>
      <Logo />
      <Dropdown />
    </Wrapper>
  );
}
