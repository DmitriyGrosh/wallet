import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";

const Home = () => <div>you are at Home</div>;
const Store = () => <div>you are at Store</div>;
const User = () => <div>you are at User</div>;
const About = () => <div>you are at About</div>;

export const LocationDisplay = () => {
  const location = useLocation();

  return <div data-testid="location-display">{location.pathname}</div>;
};

const TestRouter = () => {
  return (
    <div>
      <Link data-testid="location-home" to="/">
        Home
      </Link>
      <Link data-testid="location-store" to="/store">
        Store
      </Link>
      <Link data-testid="location-user" to="/user">
        User
      </Link>
      <Link data-testid="location-about" to="/about">
        About
      </Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/user" element={<User />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <LocationDisplay />
    </div>
  );
};

export default TestRouter;
