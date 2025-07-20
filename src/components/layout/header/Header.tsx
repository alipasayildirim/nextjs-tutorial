import { Button } from "@/components/ui/button";
import { Search, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <div className="bg-myprimarycolor shadow-sm top-0">
      <div className="flex container mx-auto justify-between items-center py-4 px-3">
        <Link href="/" className="text-white text-2xl font-bold">
          Logo
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="text-white px-4 py-2 hover:underline font-bold"
          >
            Home
          </Link>
          <Link
            href="/"
            className="text-white px-4 py-2 hover:underline font-bold"
          >
            About
          </Link>
          <Link
            href="/"
            className="text-white px-4 py-2 hover:underline font-bold"
          >
            Blog
          </Link>
          <Link
            href="/"
            className="text-white px-4 py-2 hover:underline font-bold"
          >
            Contact
          </Link>
        </nav>
        <div className="flex space-x-4">
          <Button variant={"secondary"}>
            <Search />
          </Button>
          <Link href={"/login"} >
          <Button variant={"secondary"}>
            <User />
          </Button>
          </Link>
          
         <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
