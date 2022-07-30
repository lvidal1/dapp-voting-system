import { Navbar, Button, Typography } from "@material-tailwind/react";
import React from "react";

const Header = () => {
    return (
        <header>
            <Navbar className="mx-auto max-w-screen-xl bg-white">
                <div className="text-blue-gray-900 container flex items-center justify-between">
                    <Typography
                        as="a"
                        href="#"
                        variant="small"
                        className="mr-4 cursor-pointer py-1.5 font-normal"
                    >
                        Election 2022
                    </Typography>
                    <Button variant="gradient" size="sm">
                        Vote
                    </Button>
                </div>
            </Navbar>
        </header>
    )
}

export default Header;