import { FaHouse, FaUser, FaArrowRightFromBracket } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

export const NavbarItems = () => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-x-6">
      <Link to="/">
        <FaHouse className="cursor-pointer" color="white" size={30} />
      </Link>
      <Link to="/profile">
        <FaUser className="cursor-pointer" color="white" size={30} />
      </Link>
      <Link to="/logout">
        <FaArrowRightFromBracket
          className="cursor-pointer"
          color="white"
          size={30}
        />
      </Link>
    </div>
  );
};

export const NavbarItemsMobile = () => {
  return <div></div>;
};
