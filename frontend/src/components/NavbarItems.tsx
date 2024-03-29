import { FaHouse, FaUser, FaArrowRightFromBracket } from "react-icons/fa6";

export const NavbarItems = () => {
  return (
    <div className="flex gap-x-6">
      <FaHouse className="cursor-pointer" color="white" size={30} />
      <FaUser className="cursor-pointer" color="white" size={30} />
      <FaArrowRightFromBracket className="cursor-pointer" color="white" size={30} />
    </div>
  );
};

export const NavbarItemsMobile = () => {
  return <div></div>;
};
