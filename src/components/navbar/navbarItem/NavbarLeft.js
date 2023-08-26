import React from "react";
import { useNavigate } from "react-router-dom";

const NavbarLeft = () => {
  const navigate = useNavigate();
  return (
    <div className="text-5xl cursor-pointer" onClick={() => navigate("/")}>
      ShopZone
    </div>
  );
};

export default NavbarLeft;
