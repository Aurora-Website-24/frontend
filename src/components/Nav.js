import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import React from "react";
import logo from '../images/Mask group.svg';
import trophy from '../images/trophycup.svg';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "About",
    "Partners",
    "Timeline",
    "Sponsors",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-[none] p-6">
      <NavbarContent>
        {/* <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden relative left-[-1.5rem]"
        /> */}
        <NavbarBrand>
          <img src={logo} alt="" className="lg:absolute lg:left-[-7rem] relative left-[-1.5rem]" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 relative left-[3rem]" justify="center">
        <NavbarItem>
          <Link href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="#" >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link  href="#">
            Partners
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="" href="#">
            Timeline
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">
            Sponsors
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="relative lg:left-[9rem] left-0">
        <NavbarItem>
          <Link to='/hackathon' className="">
            {/* <img src={HackathonBtn} alt="" /> */}

            <div className="relative lg:left-[2rem] left-[1.5rem] lg:w-[7.2rem]  w-[5.9rem] lg:text-[14px] text-[12px] shadow-2xl font-medium h-fit flex justify-between bg-[#000419] text-[#006FEE] rounded-lg p-2">
              <img src={trophy} alt="" className="lg:w-[1.5rem] w-[1rem]" />
              Hackathon
            </div>
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
          {/* <Link href='/'>Logout</Link> */}
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden relative left-[0.75rem]"
        />
      </NavbarContent>
      <NavbarMenu>
        {/* {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))} */}
        <NavbarMenuItem>
          <Link size="lg" href='#'>
              Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link size="lg" href='#'>
              About
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link size="lg" href='#'>
              Partners
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link size="lg" href='#'>
              Timeline
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link size="lg" href='#'>
              Sponsors
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link size="lg" href='#' color="danger">
              Log Out
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
