import React from "react";
import { LuDownload } from "react-icons/lu";
import { IoChevronBack } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import peopleData from './Constants/constants'


const CheckList = () => {
  return (
    <div className="p-10" style={{ width: "60%" }}>
      <div className="flex items-center justify-between mb-4">
        <button className="px-2 bg-gray-400 rounded-full flex items-center justify-center">
          <IoChevronBack /> Back to All Projects
        </button>
        <div className="flex">
          <button className="px-4 bg-gray-400 rounded-full flex items-center justify-center mr-4">
            <LuDownload />
            Download selected
          </button>
          <button className="px-2 text-red-500 border-2 rounded-full border-red-500 flex items-center justify-center">
            <RiDeleteBin6Line />
            Delete Selected
          </button>
        </div>
      </div>
      <div>
        <ul role="list" className="divide-y divide-gray-300">
          <li className="flex justify-between gap-x-6 py-5">
            <div className="grid grid-cols-7 gap-x-6">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer self-center"
              />
              <p className="text-sm font-bold leading-6 text-gray-900 self-center w-32">
                Modules
              </p>
              <p className="text-sm font-bold leading-6 text-gray-900 self-center w-32">
                Last Updated on
              </p>
              <p className="text-sm font-bold leading-6 text-gray-900 self-center w-32">
                Last Updated by
              </p>
              <p className="text-sm font-bold leading-6 text-gray-900 self-center w-32">
                Status
              </p>
              <p className="text-sm font-bold leading-6 text-gray-900 self-center w-32">
                Version
              </p>
              <p className="text-sm font-bold leading-6 text-gray-900 self-center w-32">
                
              </p>
            </div>
          </li>
          {peopleData.map((person, index) => (
            <li key={index} className="flex justify-between gap-x-6 py-5">
              <div className="grid grid-cols-7 gap-x-6 items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer self-center"
                />
                <p className="text-sm font-bold leading-6 text-gray-900 self-center w-32">
                  {person.module}
                </p>
                <p className="text-sm leading-5 text-gray-500 self-center w-32">
                  {person.lastUpdatedOn}
                </p>
                <p className="text-sm leading-5 text-gray-500 self-center w-32">
                  {person.lastUpdatedBy}
                </p>
                <p className="text-sm leading-5 text-gray-500 self-center w-32">
                  {person.status}
                </p>
                <p className="text-sm leading-5 text-gray-500 self-center w-32">
                  {person.version}
                </p>
                <p className="text-sm leading-5  self-center w-32 text-blue-500">
                  <button>View/Edit </button>{"  "}
                  <button>
                    <span className="text-red-500">Delete</span>
                  </button>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CheckList;
