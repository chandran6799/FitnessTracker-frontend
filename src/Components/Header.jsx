import {
  Avatar,
  Button,
  Dropdown,
  DropdownDivider,
  Navbar,
} from "flowbite-react";
import React from "react";
import { IoFitnessOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signOutSuccess } from "../Redux/Slice/userSlice";

const Header = () => {
  const path = useLocation().pathname;
  const { currentuser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignout = () => {
    dispatch(signOutSuccess());
    localStorage.removeItem("Token");
    navigate("/signin");
  };

  return (
    <div>
      <Navbar fluid className="bg-fuchsia-500 border-b-2 border-fuchsia-800">
        <Navbar.Brand>
          <Link to="/" className="flex -ml-6">
            <IoFitnessOutline className="ml-14 text-5xl text-white md:text-5xl animate-pulse" />
            <span className="fitness ml-2 self-center whitespace-nowrap text-2xl md:text-xl font-semibold text-white bg-gradient-to-r from-fuchsia-800 rounded-lg p-1">
              Fitness
            </span>
            <span className="lab ml-1 text-lg self-center">Lab</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Collapse className="-mt-5">
          <Navbar.Link active={path === "/"} as={"div"}>
            <Link className="font-bold hover:text-fuchsia-800" to="/">
              Home
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/mydashboard"} as={"div"}>
            <Link
              className="font-bold hover:text-fuchsia-800"
              to="/mydashboard"
            >
              My Dashboard
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/schedule"} as={"div"}>
            <Link className="font-bold hover:text-fuchsia-800" to="/schedule">
              Schedule
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/about"} as={"div"}>
            <Link className="font-bold hover:text-fuchsia-800" to="/about">
              About
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
        {currentuser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="user"
                img={currentuser.rest.profilePicture}
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="black text-sm">{currentuser.rest.username}</span>
            </Dropdown.Header>
            <Dropdown.Header>
              <span className="black text-sm">{currentuser.rest.email}</span>
            </Dropdown.Header>
            <Link to={"/dashboard?tab=profile"}>
              <Dropdown.Item>profile</Dropdown.Item>
            </Link>
            <DropdownDivider />
            <Dropdown.Item onClick={handleSignout}>Sign Out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/signin">
            <Button className="bg-fuchsia-800 rounded-full text-white font-bold mx-5 focus:ring focus:ring-white m-2">
              Sign in
            </Button>
          </Link>
        )}
        <Navbar.Toggle className="bg-fuchsia-800 text-white" />
      </Navbar>
    </div>
  );
};

export default Header;
