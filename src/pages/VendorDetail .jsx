import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const VendorDetail = () => {
  const [vendors, setVendors] = useState([
    {
      vendorName: "Microsoft",
      vLogo: "cloud-1.png",
      vSignature: "Microsoft AI Cloud Partner",
      isAuthorized: "Authorized",
      certificate:
        "~/Sync_Data/Forms/CRM/Files/Freelancer/2023619576SolutionPartnerLettermerged7SolutionAreas.pdf",
      certificateUrl:
        "https://learn.microsoft.com/en-us/credentials/support/partners",
    },
    {
      vendorName: "Cisco",
      vLogo: "platinum partner-logo.png",
      vSignature: "Cisco Auth Learning Partner",
      isAuthorized: "Authorized",
      certificate:
        "~/Sync_Data/Forms/CRM/Files/Freelancer/CiscoPlatinumLearningpartnervalidtill21stOct2025.pdf",
    },
    {
      vendorName: "Oracle",
      vLogo: "rgb.png",
      vSignature: "Oracle Partner Network",
      isAuthorized: "Authorized",
      certificate:
        "~/Sync_Data/Forms/CRM/Files/Freelancer/2024115533OraclemembercertificatevalidtillJan2025.pdf",
      certificateUrl:
        "https://education.oracle.com/oracle-authorized-education-partners",
    },
  ]);

  const [newVendor, setNewVendor] = useState({
    vendorName: "",
    vSignature: "",
    url: "",
    certificateUrl: "",
    knowledgeBaseUrl: "",
    vendorLogo: null,
    certificateLogo: null,
    status: "Authorized",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewVendor({ ...newVendor, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setNewVendor({ ...newVendor, [name]: files[0] });
  };

  const handleStatusChange = (e) => {
    setNewVendor({ ...newVendor, status: e.target.value });
  };

  const handleSave = () => {
    setVendors([...vendors, newVendor]);
    setNewVendor({
      vendorName: "",
      vSignature: "",
      url: "",
      certificateUrl: "",
      knowledgeBaseUrl: "",
      vendorLogo: null,
      certificateLogo: null,
      status: "Authorized",
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Vendor Detail</h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Add Vendor</h3>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="vendorName"
            value={newVendor.vendorName}
            onChange={handleInputChange}
            placeholder="Vendor Name"
            className="border p-2"
          />
          <input
            type="text"
            name="vSignature"
            value={newVendor.vSignature}
            onChange={handleInputChange}
            placeholder="VSignature"
            className="border p-2"
          />
          <input
            type="text"
            name="url"
            value={newVendor.url}
            onChange={handleInputChange}
            placeholder="URL"
            className="border p-2"
          />
          <input
            type="text"
            name="certificateUrl"
            value={newVendor.certificateUrl}
            onChange={handleInputChange}
            placeholder="Certificate URL"
            className="border p-2"
          />
          <input
            type="text"
            name="knowledgeBaseUrl"
            value={newVendor.knowledgeBaseUrl}
            onChange={handleInputChange}
            placeholder="KnowledgeBase URL"
            className="border p-2 col-span-2"
          />
          <div className="col-span-2">
            <label className="block mb-2">Vendor Logo</label>
            <input
              type="file"
              name="vendorLogo"
              onChange={handleFileChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="col-span-2">
            <label className="block mb-2">Certificate Logo</label>
            <input
              type="file"
              name="certificateLogo"
              onChange={handleFileChange}
              className="border p-2 w-full"
            />
          </div>
          <div className="col-span-2">
            <label className="block mb-2">Status</label>
            <div className="flex gap-4">
              <label>
                <input
                  type="radio"
                  name="status"
                  value="Authorized"
                  checked={newVendor.status === "Authorized"}
                  onChange={handleStatusChange}
                  className="mr-2"
                />
                Authorized
              </label>
              <label>
                <input
                  type="radio"
                  name="status"
                  value="Do Not Advertise"
                  checked={newVendor.status === "Do Not Advertise"}
                  onChange={handleStatusChange}
                  className="mr-2"
                />
                Do Not Advertise
              </label>
              <label>
                <input
                  type="radio"
                  name="status"
                  value="Unauthorized"
                  checked={newVendor.status === "Unauthorized"}
                  onChange={handleStatusChange}
                  className="mr-2"
                />
                Unauthorized
              </label>
              <label>
                <input
                  type="radio"
                  name="status"
                  value="Instructor Required"
                  checked={newVendor.status === "Instructor Required"}
                  onChange={handleStatusChange}
                  className="mr-2"
                />
                Instructor Required
              </label>
              <label>
                <input
                  type="radio"
                  name="status"
                  value="Fee Not Display Outside India"
                  checked={newVendor.status === "Fee Not Display Outside India"}
                  onChange={handleStatusChange}
                  className="mr-2"
                />
                Fee Not Display Outside India
              </label>
            </div>
          </div>
        </div>
        <button
          onClick={handleSave}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Save
        </button>
      </div>
      <h3 className="text-lg font-semibold mb-2">Vendor List</h3>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Actions</th>
            <th className="border p-2">Vendor Name</th>
            <th className="border p-2">VLogo</th>
            <th className="border p-2">VSignature</th>
            <th className="border p-2">IsAuthorized</th>
            <th className="border p-2">Certificate</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map((vendor, index) => (
            <tr key={index}>
              <td className="border p-2">
                <button className="mr-2 text-blue-500">Edit</button>
                <button className="text-red-500">Delete</button>
              </td>
              <td className="border p-2">{vendor.vendorName}</td>
              <td className="border p-2">
                <img src={vendor.vLogo} alt="Vendor Logo" className="h-8 w-8" />
              </td>
              <td className="border p-2">{vendor.vSignature}</td>
              <td className="border p-2">{vendor.isAuthorized}</td>
              <td className="border p-2">
                <a
                  href={vendor.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Certificate
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VendorDetail;
