import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"secondary"} className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader >
          <SheetTitle className="mb-4">
            <Link
              href="/"
              className="text-black  items-center text-2xl font-bold text-center"
            >
              Logo
            </Link>
          </SheetTitle>
          <nav className="flex flex-col items-start space-y-4 ">
            <Link
              href="/"
              className="text-black px-4 py-2 hover:underline font-bold"
            >
              Home
            </Link>
            <Link
              href="/"
              className="text-black px-4 py-2 hover:underline font-bold"
            >
              About
            </Link>
            <Link
              href="/"
              className="text-black px-4 py-2 hover:underline font-bold"
            >
              Blog
            </Link>
            <Link
              href="/"
              className="text-black px-4 py-2 hover:underline font-bold"
            >
              Contact
            </Link>
          </nav>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
