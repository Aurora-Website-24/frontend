import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle } from "@nextui-org/react";
import React from "react";
import HackathonBtn from '../images/HackathonBtn.svg';
import Logo from '../images/Mask group.svg';

export default function App() {
  // const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // const menuItems = [
  //   "Login",
  //   "Hackathon",
  // ];

  return (
    <Navbar className="bg-[none] grid grid-cols-2" isBlurred='false'>
    {/* onMenuOpenChange={setIsMenuOpen} */}
      <NavbarContent className="">
        <NavbarMenuToggle
          // aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <img src={Logo} alt="" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {/* <NavbarItem isActive>
          <Link color="foreground">
            <a href="#home">Home</a>
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color="foreground">
            <a href="#about">About</a>
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color="foreground">
            <a href="/">Partners</a>
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color="foreground">
            <a href="/">Timeline</a>
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color="foreground">
            <a href="/">Sponsors</a>
          </Link>
        </NavbarItem> */}
        <div className=""></div>
      </NavbarContent>
      <NavbarContent justify="end" className="">
        <NavbarItem className=" lg:flex" isActive>
          {/* HERE IS LOGIN */}
          <Link href='/register'>                 
            Login
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          {/* HERE IS HACKATHON */}
          <a href="/hackathon">
            <img src={HackathonBtn} alt="" />
          </a>
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarMenu className="bg-black">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "foreground" : index === menuItems.length - 1 ? "primary" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu> */}
    </Navbar>
  );
}
