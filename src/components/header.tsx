import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Input,
} from "@nextui-org/react";
import Link from "next/link";
import HeaderAuth from "./header-auth";
import { ThemeSwitcher } from "./theme-switcher";

const Header = () => {

  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href={"/"} className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>

      <NavbarContent justify="center">
        <Input />
      </NavbarContent>
      <NavbarContent>
        <ThemeSwitcher />
      </NavbarContent>
      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
};
export default Header;
