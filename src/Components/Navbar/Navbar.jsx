import React, { useContext, useRef, useState,useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import { auth } from "../../Pages/firebase";
import cart from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import dropdown from "../Assets/dropdown.png";
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };
  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>
      <img
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={dropdown}
        alt=""
      />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>{" "}
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link style={{ textDecoration: "none" }} to="/mens">
            Men
          </Link>{" "}
          {menu === "mens" ? <hr /> : <></>}{" "}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link style={{ textDecoration: "none" }} to="/womens">
            Women
          </Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>

      <div className="nav-cart">
        <Link to="/signup">
          { !user && <button>Login</button>}
        </Link>
        {user && <p>{user.email}</p>}
        { user && <button onClick={handleLogout}>Logout</button>}

        <Link to="/cart">
          {" "}
          <img src={cart} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
