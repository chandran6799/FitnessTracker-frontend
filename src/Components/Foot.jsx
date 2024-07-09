import { Footer } from "flowbite-react";
import React from "react";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import { IoFitnessOutline } from "react-icons/io5";

const Foot = () => {
  return (
    <div className="p-3 rounded-t-2xl bg-fuchsia-400 bg-opacity-40 border-2 border-fuchsia-900">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="flex">
            <IoFitnessOutline className="md:ml-44 mt-9 text-6xl text-fuchsia-800 md:text-6xl animate-pulse" />
            <h1 className="text-xl md:text-2xl my-9 md:mt-12 ml-1 decoration-fuchsia-700 text-black font-bold">
              Fitness Lab
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 ml-10">
            <div>
              <Footer.Title
                className="text-fuchsia-700 font-bold underline"
                title="about"
              />
              <Footer.LinkGroup col>
                <Footer.Link
                  className="text-fuchsia-700 font-bold"
                  href="https://flowbite-react.com/"
                >
                  Flowbite
                </Footer.Link>
                <Footer.Link
                  className="text-fuchsia-700 font-bold"
                  href="https://tailwindcss.com/"
                >
                  Tailwind CSS
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title
                className="text-fuchsia-700 font-bold underline"
                title="Follow us"
              />
              <Footer.LinkGroup col>
                <Footer.Link className="text-fuchsia-700 font-bold" href="#">
                  Github
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title
                className="text-fuchsia-700 font-bold underline"
                title="Legal"
              />
              <Footer.LinkGroup col>
                <Footer.Link className="text-fuchsia-700 font-bold" href="#">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link className="text-fuchsia-700 font-bold" href="#">
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            className="text-fuchsia-700 font-medium"
            href="/"
            by="Chandran™"
            year={new Date().getFullYear()}
          />
          <div className="text-slate-700 mx-44  mt-4 flex space-x-6 sm:mt-0 sm:justify-center ml-52">
            <Footer.Icon icon={BsGithub} />
            <Footer.Icon icon={BsLinkedin} />
            <Footer.Icon icon={BsTwitter} />
            <Footer.Icon icon={BsInstagram} />
            <Footer.Icon icon={BsFacebook} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foot;
