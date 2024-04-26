import React from "react";
import { LuDownload } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import peopleData from './Constants/constants'
import { CiSearch } from "react-icons/ci";



const CheckList_AllProjects = () => {
  return (
    <div className="pb-10 justify-end">
      <div className='text-4xl font-semibold p-8'>
        All Projects
      </div>
      <div className="flex items-center justify-end ">
        <div className="flex pr-24">
          <button className=" w-full text-sm  border-2 border-black bg-gray-400 rounded-full flex items-center justify-center m-2 ">
            <LuDownload />
            Download selected
          </button>
          <button className=" w-full text-sm text-red-500 border-2 rounded-full border-red-500 flex items-center justify-center m-2 ">
            <RiDeleteBin6Line />
            Delete Selected
          </button>
        <div className="relative flex items-center justify-center">
        <input
            type="text"
            placeholder="Search with document"
            className="border border-gray-600 rounded-md w-full flex  px-2 py-1 text-base" // Adjust size here
            style={{ width: '250px' }} // Additional styles
          />
        <CiSearch className="absolute right-3 transform -translate-y-1/5 text-black text-xl" />
      </div>
        </div>
        
      </div>

      <div>
        <ul role="list" className="divide-y divide-gray-300">
          <li className="flex justify-between gap-x-4 py-5">
            <div className="grid grid-cols-8 gap-x-4">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer self-center"
              />
              <p className="text-sm font-bold leading-6 text-gray-900 self-center w-32">
                Modules
              </p>
              <p className="text-sm font-bold leading-6 text-gray-900 self-center w-32">
              Client
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
            <li key={index} className="flex justify-between gap-x-4 py-5">
              <div className="grid grid-cols-8 gap-x-4 items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer self-center"
                />
                <p className="text-sm font-bold leading-6 text-gray-900 self-center w-32">
                  {person.module}
                </p>
                <p className="text-sm leading-5 text-gray-500 self-center w-32">
                  {person.client}
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

export default CheckList_AllProjects;
