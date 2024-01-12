import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";
import HackathonBtn from '../images/HackathonBtn.svg';
import Logo from '../images/Mask group.svg';

export default function NavBar() {
    return (
        <Navbar position="static" className="bg-[none]" isBlurred='false'>
            <NavbarBrand>
                <img src={Logo} alt="" className="lg:w-[6rem] w-[4rem]" />
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {/* <NavbarItem>
                    <Link color="foreground" href="#">
                        Features
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        Customers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Integrations
                    </Link>
                </NavbarItem> */}
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="flex">
                    <Link to='/auth/google/callback' className="lg:w-fit w-[15rem] p-0">
                        <img src={HackathonBtn} alt="" />
                    </Link>
                    <Link to='/hackthon' className="w-fit p-0">
                        <img src={HackathonBtn} alt="" />
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
