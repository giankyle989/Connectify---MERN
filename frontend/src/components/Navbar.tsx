import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { NavbarItems } from "./NavbarItems";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-sky-400 flex justify-between p-4">
      <h1 className="text-white text-2xl font-bold">Connectify</h1>

      <div onClick={handleOpen} className="cursor-pointer md:hidden z-20">
        {isOpen ? (
          <IoClose size={30} color="white" />
        ) : (
          <GiHamburgerMenu size={30} color="white" />
        )}
      </div>

      <div className="hidden md:block">
        <NavbarItems />
      </div>
    </div>
  );
};
export default Navbar;
