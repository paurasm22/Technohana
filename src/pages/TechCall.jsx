import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const TechCall = () => {
  const [formData, setFormData] = useState({
    certification: "",
    vendor: "",
    technology: "",
    course: "",
    trainer: "",
    cceName: "Jalal Khan (2430)",
    date: "",
    time: "",
    resource: "Jalal Khan (2430)",
    remarks: "",
    timeZone: "India Standard Time",
    location: "",
    clientName: "",
    clientEmail: "",
    country: "",
    phone: "",
    education: "",
    experience: "",
    skills: "",
    certifications: "",
    objective: "",
    resume: null,
    dateFrom: "",
    dateTo: "",
    techCallId: "",
    myTechCall: false,
    withoutRating: false,
    notConverted: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSave = () => {
    console.log(formData);
    // Add save logic here
  };

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-xl font-bold mb-4">Tech Call</h2>
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Certification/Combo/Course
          </label>
          <input
            type="text"
            name="certification"
            value={formData.certification}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Enter Certification or Course"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 font-bold mb-2">Vendor</label>
            <select
              name="vendor"
              value={formData.vendor}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg"
            >
              <option>Please select</option>
              {/* Add other options here */}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Technology
            </label>
            <select
              name="technology"
              value={formData.technology}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg"
            >
              <option>Please select</option>
              {/* Add other options here */}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Select Course
            </label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Select Course"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Trainer
            </label>
            <input
              type="text"
              name="trainer"
              value={formData.trainer}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Trainer"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              CCE Name
            </label>
            <input
              type="text"
              name="cceName"
              value={formData.cceName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg"
              disabled
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Time (24 Hour)
            </label>
            <input
              type="text"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter Time"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Resource
            </label>
            <input
              type="text"
              name="resource"
              value={formData.resource}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg"
              disabled
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Remarks</label>
          <textarea
            name="remarks"
            value={formData.remarks}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg h-24"
            placeholder="Remarks"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Time Zone
            </label>
            <input
              type="text"
              name="timeZone"
              value={formData.timeZone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg"
              disabled
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Location"
            />
          </div>
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            name="autoDemoLink"
            checked={formData.autoDemoLink}
            onChange={handleInputChange}
            className="mr-2"
          />
          <label className="text-gray-700">Want to send auto demo link</label>
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            name="dmForThis"
            checked={formData.dmForThis}
            onChange={handleInputChange}
            className="mr-2"
          />
          <label className="text-gray-700">DM For This</label>
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            name="deniedByDm"
            checked={formData.deniedByDm}
            onChange={handleInputChange}
            className="mr-2"
          />
          <label className="text-gray-700">Denied By DM</label>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-lg font-semibold mb-4">Client Details</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Client Name
            </label>
            <input
              type="text"
              name="clientName"
              value={formData.clientName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Client Name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              name="clientEmail"
              value={formData.clientEmail}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Country
            </label>
            <label className="block text-gray-700 font-bold mb-2">
              Country
            </label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Country"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Phone Number"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Educational Background
          </label>
          <textarea
            name="education"
            value={formData.education}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg h-24"
            placeholder="Educational Background"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Experience
          </label>
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg h-24"
            placeholder="Experience"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Student's Current Skills
          </label>
          <textarea
            name="skills"
            value={formData.skills}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg h-24"
            placeholder="Student's Current Skills"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Student's Current Certifications
          </label>
          <textarea
            name="certifications"
            value={formData.certifications}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg h-24"
            placeholder="Student's Current Certifications"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Objective of Training
          </label>
          <textarea
            name="objective"
            value={formData.objective}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg h-24"
            placeholder="Objective of Training"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Resume</label>
          <input
            type="file"
            name="resume"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border rounded-lg"
          />
          <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-lg">
            Upload
          </button>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-lg font-semibold mb-4">Search and Save</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Date From
            </label>
            <input
              type="date"
              name="dateFrom"
              value={formData.dateFrom}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Date To
            </label>
            <input
              type="date"
              name="dateTo"
              value={formData.dateTo}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Client Email
            </label>
            <input
              type="email"
              name="clientEmail"
              value={formData.clientEmail}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Tech Call ID
            </label>
            <input
              type="text"
              name="techCallId"
              value={formData.techCallId}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            name="myTechCall"
            checked={formData.myTechCall}
            onChange={handleInputChange}
            className="mr-2"
          />
          <label className="text-gray-700 font-bold">My tech call</label>
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            name="withoutRating"
            checked={formData.withoutRating}
            onChange={handleInputChange}
            className="mr-2"
          />
          <label className="text-gray-700 font-bold">Without Rating</label>
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            name="notConverted"
            checked={formData.notConverted}
            onChange={handleInputChange}
            className="mr-2"
          />
          <label className="text-gray-700 font-bold">Not Converted</label>
        </div>
        <div className="flex justify-end space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Search
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechCall;
