import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoChevronBack } from "react-icons/io5";
import { MdDone } from "react-icons/md";

const SearchProject = () => {
  const [activeTab, setActiveTab] = useState("about");

  const aboutData = (
    <div className="text-left py-4">
      <div>
        <span className="rounded-full flex items-center ml-auto">
          <IoChevronBack /> {"  "}
          <button className="text-blue-600">All Projects</button>/Project:
          Business Document for Olobby Software Project
        </span>
      </div>
      <div>
        <div className="m-4">
          <label htmlFor="documentName" className="block font-thin mb-1">
            Document Name
          </label>
          <input
            type="text"
            id="documentName"
            placeholder="Enter document name"
            className="border border-gray-500 px-3 pb-20 rounded-md w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="m-4">
          <label htmlFor="client" className="block font-thin m-1">
            Client
          </label>
          <input
            type="text"
            id="client"
            placeholder="Enter client name"
            className="border border-gray-500 px-3 py-2 rounded-md w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <button className="bg-gray-800 text-white py-1 px-2 rounded-md flex items-center justify-center gap-2 ml-auto hover:bg-black">
          Update
          <MdDone />
        </button>{" "}
      </div>
      <div className="m-4 flex flex-wrap">
  <p className="mr-24 font-semibold text-gray-800">
    Created on
    <span className="block font-semibold  text-gray-500">2024-04-19</span>
  </p>
  <p className="mr-24 font-semibold text-gray-800">
    Last Updated on
    <span className="block font-semibold text-gray-500">2024-04-19</span>
  </p>
  <p className="font-semibold text-gray-800">
    Version:
    <span className="block font-semibold text-gray-500">1.0</span>
  </p>
</div>

    </div>
  );

  const versionsData = (
    <div>
      <h2>Versions</h2>
      {/* Add your Versions content here */}
    </div>
  );

  // Conditional rendering based on activeTab
  const tabContent = activeTab === "about" ? aboutData : versionsData;

  return (
    <div className="p-8 flex flex-col items-center">
      <div className="relative w-full flex items-center justify-center">
        <input
          type="text"
          placeholder="Search with document"
          className="border border-gray-600 pl-4 pr-56 py-2 rounded-md w-full mb-4"
        />
        <CiSearch className="absolute right-3 transform -translate-y-1/4 text-black text-2xl" />
      </div>
      <div className="flex">
        <button
          className={`px-4 py-2 rounded-md mr-4 focus:outline-none ${
            activeTab === "about"
              ? " underline underline-offset-4	 text-black"
              : "bg-white"
          }`}
          onClick={() => setActiveTab("about")}
        >
          About
        </button>
        <button
          className={`px-4 py-2 rounded-md focus:outline-none ${
            activeTab === "versions"
              ? " underline underline-offset-4	 text-black"
              : "bg-white"
          }`}
          onClick={() => setActiveTab("versions")}
        >
          Versions
        </button>
      </div>
      {/* Render the content based on the active tab */}
      {tabContent}
    </div>
  );
};

export default SearchProject;
