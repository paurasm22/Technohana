import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const AddDomain = () => {
  const [domainName, setDomainName] = useState("");
  const [managerName, setManagerName] = useState("");
  const [associatedTechnology, setAssociatedTechnology] = useState("");
  const [technologies, setTechnologies] = useState([]);

  const handleAddTechnology = () => {
    if (associatedTechnology) {
      setTechnologies([...technologies, associatedTechnology]);
      setAssociatedTechnology("");
    }
  };

  const handleSave = () => {
    // Handle save logic here
    console.log("Domain Name:", domainName);
    console.log("Manager Name:", managerName);
    console.log("Technologies:", technologies);
  };

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-xl font-bold mb-4">DOMAIN DETAIL</h2>
      <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-lg font-semibold mb-2">Add Domain</h3>
        <div className="mb-4">
          <label className="block text-gray-700">Domain Name</label>
          <input
            type="text"
            value={domainName}
            onChange={(e) => setDomainName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Manager Name</label>
          <input
            type="text"
            value={managerName}
            onChange={(e) => setManagerName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Associated Technology</label>
          <div className="flex">
            <input
              type="text"
              value={associatedTechnology}
              onChange={(e) => setAssociatedTechnology(e.target.value)}
              className="flex-grow p-2 border border-gray-300 rounded-l mt-1"
            />
            <button
              onClick={handleAddTechnology}
              className="p-2 bg-blue-500 text-white rounded-r mt-1"
            >
              Add
            </button>
          </div>
        </div>
        <button
          onClick={handleSave}
          className="p-2 bg-green-500 text-white rounded"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddDomain;
