
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar2 from "../components/Navbar2";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const loggedInID = localStorage.getItem("id");

  useEffect(() => {
    axios
      .get("http://localhost:3000/orders")
      .then((res) => {
        const userOrders = res.data.filter(
          (order) => order.userId === loggedInID
        );

        setOrders(userOrders);
      })
      .catch((err) => console.log("Orders Error:", err));
  }, [loggedInID]);

  return (
    <>
      <Navbar2 />

      <div style={{ padding: "30px" }}>
        <h1 style={{ textAlign: "center" }}>My Orders</h1>

        {orders.length > 0 ? (
          orders.map((order) => (
            <div
              key={order.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "25px",
                padding: "20px",
                margin: "20px auto",
                maxWidth: "800px",
                background: "white",
                borderRadius: "12px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.12)"
              }}
            >
              <img
                src={order.productImage}
                alt={order.productName}
                style={{
                  width: "130px",
                  height: "130px",
                  objectFit: "contain"
                }}
              />

              <div>
                <h2>{order.productName}</h2>
                <p>Quantity: {order.quantity}</p>
                <p>Price: ₹{order.price}</p>
                <p>Total: ₹{order.total}</p>
                <p>Date: {order.date}</p>
                <p>Address: {order.address}</p>
                <p>Status: {order.status}</p>
              </div>
            </div>
          ))
        ) : (
          <h3 style={{ textAlign: "center" }}>
            No orders found
          </h3>
        )}
      </div>
    </>
  );
};

export default Orders;
