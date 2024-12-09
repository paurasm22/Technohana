import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const Technology = () => {
  const [technologies, setTechnologies] = useState([
    {
      technology: "Microsoft Dynamics NAV",
      vendor: "Microsoft",
      hrDomain: "Dynamics",
    },
    {
      technology: "Project Management",
      vendor: "PMI",
      hrDomain: "Project Management",
    },
    {
      technology: "Microsoft System Center",
      vendor: "Microsoft",
      hrDomain: "MCSE",
    },
    {
      technology: "Microsoft Exchange Server",
      vendor: "Microsoft",
      hrDomain: "MCSE",
    },
    {
      technology: "Microsoft Communication",
      vendor: "Microsoft",
      hrDomain: "MCSE",
    },
    {
      technology: "Server Virtualization with Windows Server & System Centre",
      vendor: "Microsoft",
      hrDomain: "MCSE",
    },
    { technology: "SharePoint Admin", vendor: "Microsoft", hrDomain: "MCSE" },
    {
      technology: "Microsoft Office 365",
      vendor: "Microsoft",
      hrDomain: ".net",
    },
    {
      technology: "SharePoint Developer",
      vendor: "Microsoft",
      hrDomain: "MCSE",
    },
    {
      technology: "Microsoft SQL Server",
      vendor: "Microsoft",
      hrDomain: "SQL",
    },
    {
      technology:
        "Citrix Virtual Apps and Desktops (formerly XenApp and XenDesktop)",
      vendor: "Citrix",
      hrDomain: "Citrix",
    },
    {
      technology: "Citrix Endpoint Management (formerly XenMobile)",
      vendor: "Citrix",
      hrDomain: "Citrix",
    },
    {
      technology: "Citrix Hypervisor (formerly XenServer)",
      vendor: "Citrix",
      hrDomain: "Citrix",
    },
    {
      technology: "Citrix ADC (formerly NetScaler)",
      vendor: "Citrix",
      hrDomain: "Citrix",
    },
    { technology: "MS Office", vendor: "Microsoft", hrDomain: ".net" },
    { technology: "Microsoft .Net", vendor: "Microsoft", hrDomain: ".net" },
    { technology: "VMware vSphere", vendor: "VMware", hrDomain: "Vmware" },
    { technology: "VMware Horizon", vendor: "VMware", hrDomain: "Vmware" },
    { technology: "VMware NSX", vendor: "VMware", hrDomain: "Vmware" },
    { technology: "Oracle Exadata", vendor: "Oracle", hrDomain: "Oracle" },
    {
      technology: "Oracle Middleware",
      vendor: "Oracle",
      hrDomain: "Middleware",
    },
  ]);

  const [newTechnology, setNewTechnology] = useState({
    technology: "",
    vendor: "",
    hrDomain: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTechnology({ ...newTechnology, [name]: value });
  };

  const handleSave = () => {
    setTechnologies([...technologies, newTechnology]);
    setNewTechnology({
      technology: "",
      vendor: "",
      hrDomain: "",
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">TECHNOLOGY DETAIL</h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Add/Update Technology</h3>
        <form className="grid grid-cols-3 gap-4">
          <input
            type="text"
            name="technology"
            value={newTechnology.technology}
            onChange={handleInputChange}
            placeholder="Technology Name"
            className="border p-2"
          />
          <input
            type="text"
            name="vendor"
            value={newTechnology.vendor}
            onChange={handleInputChange}
            placeholder="Vendor Name"
            className="border p-2"
          />
          <input
            type="text"
            name="hrDomain"
            value={newTechnology.hrDomain}
            onChange={handleInputChange}
            placeholder="HR Domain"
            className="border p-2"
          />
          <button
            type="button"
            onClick={handleSave}
            className="col-span-3 bg-blue-500 text-white p-2 mt-2"
          >
            Save
          </button>
        </form>
      </div>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Technology</th>
            <th className="border px-4 py-2">Vendor</th>
            <th className="border px-4 py-2">HR Domain</th>
            <th className="border px-4 py-2">Actions</th>
            <th className="border px-4 py-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {technologies.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{item.technology}</td>
              <td className="border px-4 py-2">{item.vendor}</td>
              <td className="border px-4 py-2">{item.hrDomain}</td>
              <td className="border px-4 py-2">
                <button className="bg-yellow-500 text-white px-4 py-1 mr-2">
                  Edit
                </button>
              </td>
              <td className="border px-4 py-2">
                <button className="bg-red-500 text-white px-4 py-1">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Technology;
