
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar2 from "../components/Navbar2";
import axios from "axios";
import "./UserDashboard.css";

const UserDashboard = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const loggedInID = localStorage.getItem("id");

  function logout() {
    localStorage.clear();
    navigate("/userlogin");
    toast.success("Logout Done...");
  }

  useEffect(() => {
    if (loggedInID) {
      axios
        .get(`http://localhost:3000/users/${loggedInID}`)
        .then((res) => setUser(res.data))
        .catch((err) => console.log(err));
    }
  }, [loggedInID]);

  useEffect(() => {
  axios
    .get("http://localhost:3000/products")
    .then((res) => {
      console.log("Products Data:", res.data);
      setProducts(res.data);
    })
    .catch((err) => console.log(err));
}, []);

  // Search and category filtering
  const filteredProducts = products.filter((x) => {
    const productName = (x.name || "").toLowerCase();
    const productCategory = (x.category || "").toLowerCase();

    const matchesSearch = productName.includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      productCategory === category.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar2 />

      <div className="dashboard">

        <h1 className="welcome-title">
          Welcome to Dashboard
        </h1>

        {/* Profile Section */}
        <div className="profile-card">

          <button
            type="button"
            className="logout-btn"
            onClick={logout}
          >
            Logout
          </button>

          <br />
          <br />

          {user.profilePic && (
            <img
              src={user.profilePic}
              alt="Profile"
              className="profile-img"
            />
          )}

          <h1 className="username">
            Welcome, {user.name}
          </h1>

        </div>

        {/* Search Section */}
        <form
          className="search-box"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Search Products..."
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            type="submit"
            className="search-btn"
          >
            Search
          </button>
        </form>

        {/* Category Section */}
        <div className="category-section">

          {["All", "Electronics", "Fashion", "Mobiles", "Laptops"].map((item) => (
            <button
              type="button"
              key={item}
              className="category-btn"
              onClick={() => setCategory(item)}
              style={{
                backgroundColor: category === item ? "#2563eb" : "white",
                color: category === item ? "white" : "#334155"
              }}
            >
              {item}
            </button>
          ))}

        </div>

        <h1 className="products-title">
          Products
        </h1>

        {/* Products Section */}
        <div className="products-container">

          {filteredProducts.length > 0 ? (

            filteredProducts.map((x) => (
              <div
                className="product-card"
                key={x.id}
              >

                <img
                  src={x.image}
                  alt={x.name}
                  className="product-image"
                />

                <h3 className="product-name">
                  {x.name}
                </h3>

                <p>₹{x.price}</p>

                <button
                  type="button"
                  className="view-btn"
                  onClick={() => navigate(`/productdetail/${x.id}`)}
                >
                  View Product
                </button>

              </div>
            ))

          ) : (

            <p className="no-products">
              No products found
            </p>

          )}

        </div>

      </div>
    </>
  );
};

export default UserDashboard;
