import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex mb-6 p-1 justify-center gap-16  ">
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/product">Product</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/cart">Cart</NavLink>
      <NavLink to="/login">Login</NavLink>
    </>
    </div>
  );
};

export default Nav;
