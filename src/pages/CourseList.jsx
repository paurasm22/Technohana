import React from "react";

const CourseList = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-sm text-gray-600 mb-4">
          Course to be marked customized only if it is not a standard course and
          made for only a specific customer. It has no relation to being a
          freelancer-only course.
        </h1>
        <div className="grid grid-cols-4 gap-4 mb-6">
          <input
            type="text"
            placeholder="Vendor"
            className="p-2 border rounded"
          />
          <select className="p-2 border rounded">
            <option>-- All --</option>
          </select>
          <input
            type="text"
            placeholder="Technology"
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Courses"
            className="p-2 border rounded"
          />
        </div>
        <div className="flex gap-4 mb-6">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Display Technology
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Display TechWise Hours
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Display Courses
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div>
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>Discontinue</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>Duplicate</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>Custom</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>Future Courses</span>
            </label>
          </div>
          <div>
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>Basic Courses</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>New Courses</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>With Keywords</span>
            </label>
          </div>
        </div>
        <div className="flex gap-4 mb-6">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Display All DM's Mapped Vend & Tech
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Check Exam Linked Or Not
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Display Mapped Vendor & Technology
          </button>
        </div>
        <div className="flex gap-4 items-center mb-6">
          <input
            type="text"
            placeholder="Search By Keyword"
            className="p-2 border rounded flex-grow"
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Search By Keyword
          </button>
        </div>
        <div className="flex justify-between">
          <div>
            <p>Total [35] courses are there without duration</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Course Without Duration
            </button>
          </div>
          <div>
            <p>Total [52] courses are there without vendor</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Course Without Vendor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
