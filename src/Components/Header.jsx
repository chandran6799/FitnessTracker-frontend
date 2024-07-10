import {
  Avatar,
  Button,
  Dropdown,
  DropdownDivider,
  Modal,
  Navbar,
} from "flowbite-react";
import React, { useState } from "react";
import { IoFitnessOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { deleteUserFailure, deleteUserStart, deleteUserSuccess, signOutSuccess } from "../Redux/Slice/userSlice";
import { HiOutlineExclamationCircle } from "react-icons/hi";


const Header = () => {
  const path = useLocation().pathname;
  const { currentuser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const handleSignout = () => {
    dispatch(signOutSuccess());
    localStorage.removeItem("Token");
    navigate("/signin");
  };

  const handleDelete = async () => {
    setShowModal(false);
    try {
      dispatch(deleteUserStart());
      const response = await fetch(
        `https://fitness-tracker-backend-a17f.onrender.com//api/user/delete/${currentuser.rest._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("Token"),
          },
        }
      );
      const data = await response.json();
      if (!response.ok) {
        dispatch(deleteUserFailure(data.message));
      } else {
        dispatch(deleteUserSuccess(data));
      }
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
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
            <Dropdown.Item onClick={handleSignout}>SignOut</Dropdown.Item>
            <Dropdown.Item onClick={() => setShowModal(true)}>Delete Account</Dropdown.Item>
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
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size="md"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 mb-4 mx-auto" />
            <h3 className="mb-5 text-gray-500 text-lg">
              Are you sure you want to delete this Account ?
            </h3>
            <div className="flex justify-center gap-20">
              <Button color="failure" onClick={handleDelete}>
                Yes,I'm sure
              </Button>
              <Button color="gray" onClick={() => setShowModal(false)}>
                No, cancle
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Header;
