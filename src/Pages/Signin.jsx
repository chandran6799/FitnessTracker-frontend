import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { HiInformationCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../Redux/Slice/userSlice";
import OAuth from "../Components/OAuth";

const Signup = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure(("please fill out the fields")));
    }
    try {
      dispatch(signInStart());
      const response = await fetch(
        "https://fitness-tracker-backend-a17f.onrender.com/api/auth/login-user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (data.success === false) {
        return dispatch(signInFailure((data.message)));
      }
      if (response.ok) {
        localStorage.setItem("Token", data.token);
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure((error.message)));
    }
  };

  return (
    <div className="min-h-screen mb-5">
      <div className="signin mt-14">
        <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
          <div className="flex-1 -mt-14 ml-10">
            <div className="font-bold text-2xl mt-20">
              <span className="fitness px-3 py-1 bg-gradient-to-r text-white from-fuchsia-800 rounded-lg">
                Fitness
              </span>
              <span className="lab">Lab</span>
            </div>

            <p className="text-sm mt-6 text-black">
              You can sign in with your Email and password or you can use the
              Google.
            </p>
          </div>
          <div className="flex-1 p-5">
            <form
              className="flex flex-col gap-4 w-80 ml-38 mt-4"
              onSubmit={handleSubmit}
            >
              <div>
                <Label value="Email" />
                <TextInput
                  type="email"
                  placeholder="name@company.com"
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label value="Password" />
                <TextInput
                  type="password"
                  placeholder="Enter Your Password"
                  id="password"
                  onChange={handleChange}
                />
              </div>
              <Button
                className="bg-fuchsia-700"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Spinner aria-label="Purple spinner example" size="md" />
                    <span className="pl-3 font-bold">Loading...</span>
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
              <OAuth />
            </form>
            <div className="flex gap-2 text-sm mt-6 ml-38">
              <span>Don't Have An Account?</span>
              <Link to="/signup" className="text-blue-600">
                Sign Up
              </Link>
            </div>

            {errorMessage && (
              <Alert color="failure" icon={HiInformationCircle} className="mt-5">
                <span className="font-medium me-2">OOPS!</span>
                {errorMessage}
              </Alert>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
