import React from "react";
import "tailwindcss/tailwind.css";

const ExamDetails = () => {
  return (
    <div className="  p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">EXAM DETAIL</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Add Exam Details</h3>
        <form>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700">Exam Name:</label>
              <div className="flex">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <button className="ml-2 p-2 bg-blue-500 text-white rounded-md">
                  Search
                </button>
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Exam Code:</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Vendor Name:</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">India Cost:</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Dubai Cost:</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Other World Cost:</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Course:</label>
            <div className="flex">
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <button className="ml-2 p-2 bg-blue-500 text-white rounded-md">
                Add
              </button>
            </div>
          </div>
          <div className="flex justify-end space-x-4">
            <button className="p-2 bg-green-500 text-white rounded-md">
              Save
            </button>
            <button className="p-2 bg-red-500 text-white rounded-md">
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExamDetails;
