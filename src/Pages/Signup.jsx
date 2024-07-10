import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { HiInformationCircle } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../Components/OAuth";

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("please fill out the fields");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const response = await fetch(
        "https://fitness-tracker-backend-a17f.onrender.com/api/auth/reigster-user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      if (response.ok) {
        navigate("/signin");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="signup mt-16 mb-5">
        <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
          <div className="flex-1 -mt-14 ml-10">
            <div className="mt-5 font-bold text-2xl">
              <span className="fitness px-3 py-1 bg-gradient-to-r text-white from-fuchsia-800 rounded-lg">
                Fitness
              </span>
              <span className="lab">Lab</span>
            </div>

            <p className="text-sm mt-6 text-black">
              You can sign up with your Email and password or you can use the
              Google.
            </p>
          </div>
          <div className="flex-1 p-5">
            <form
              className="flex flex-col gap-4 w-80 ml-38"
              onSubmit={handleSubmit}
            >
              <div>
                <Label value="Username" />
                <TextInput
                  type="text"
                  placeholder="Enter Your Username"
                  id="username"
                  onChange={handleChange}
                />
              </div>
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
                  "Sign Up"
                )}
              </Button>
              <OAuth />
            </form>
            <div className="flex gap-2 text-sm mt-6 ml-38">
              <span>Already Have an account?</span>
              <Link to="/signin" className="text-blue-600">
                Sign In
              </Link>
            </div>

            {errorMessage && (
              <Alert color="failure" icon={HiInformationCircle} className="">
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
