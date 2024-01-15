import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";
import Logo from '../images/Mask group.svg';
import trophy from '../images/trophycup.svg';

export default function NavBar() {
    return (
        <Navbar position="static" className="bg-[none]" isBlurred='false'>
            <NavbarBrand>
                <img src={Logo} alt="" className="lg:w-[4rem] w-[4rem] relative lg:left-[-6rem] left-4" />
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
            <NavbarContent justify="end" className="relative lg:left-[6rem]">
                <NavbarItem>
                    <Link to='/hackathon' className="lg:w-[12rem] w-[8rem] p-0 relative lg:left-[3rem] left-[4rem]">
                        {/* <img src={HackathonBtn} alt="" /> */}

                        <div className="hackathonbtn lg:w-[8.5rem]  w-[6.2rem] lg:text-lg text-[12px] shadow-2xl font-medium h-fit flex justify-between bg-[#000419] text-[#006FEE] rounded-lg p-2">
                            <img src={trophy} alt="" className="lg:w-[1.5rem] w-[1rem]"/>
                            Hackathon
                        </div>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link to='/auth/google/callback' className="relative lg:left-0 left-[1rem] text-[#006FEE] lg:text-lg text-xs font-medium">
                        Login
                    </Link>
                    {/* <Link to='/auth/google/callback' className="relative left-10 text-[red] lg:text-lg text-[0.7rem] font-medium">
                        Logout
                    </Link> */}
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
