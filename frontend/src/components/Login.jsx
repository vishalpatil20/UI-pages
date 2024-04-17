import React from "react";
import logo from "../assets/react.svg"; // add images in assets and change the path
import { BiLogIn } from "react-icons/bi";

const LoginContainer = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-500">
      <div className="bg-gray-200  rounded-lg shadow-lg flex">
        <div className="w-1/2">
          <img
            src={logo}
            alt="Your Image"
            className="object-cover w-full h-96 rounded-l-lg"
          />
        </div>
        <div className="w-1/2 py-8 px-10">
          <h2 className="text-lg font-medium mb-4">Welcome to BluePrint AI</h2>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-semibold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="border border-gray-600 rounded-md p-1 w-full"
              placeholder="Enter your Project name" 
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your Password" 
              className="border border-gray-600 rounded-md p-1 w-full"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="role"
              className="block text-gray-700 font-semibold mb-2"
            >
              Role
            </label>
            <select
              id="role"
              name="role"
              className="border border-gray-600 rounded-md p-1 w-full"
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
          <button className="bg-gray-800 text-white py-1 px-2 rounded-md flex items-center justify-center gap-2 ml-auto hover:bg-black">
            Login
            <BiLogIn />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
