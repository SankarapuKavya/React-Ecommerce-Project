import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const navigate = useNavigate();

  return (
    <div className="nav">
      <div className="left">
        <h2>Cartify</h2>
      </div>

      <div className="right">
        <h2
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/userdashboard")}
        >
          Products
        </h2>

        <h2
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/orders")}
        >
          Orders
        </h2>
      </div>
    </div>
  );
};

export default Navbar2;