import React from "react";
import { Link } from "react-router-dom";
import "../Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>TechnoHana</h2>
      <ul>
        <li>
          <Link to="/home/communication">Communication (Sales & FM)</Link>
        </li>
        <li>
          <Link to="/home/ghl">GHL</Link>
        </li>
        <li>
          <Link to="/home/directory">Directory</Link>
        </li>
        <li>
          <Link to="/home/dm-kpi">DM KPI</Link>
        </li>
        <li>
          <Link to="/home/master-kpi">Master KPI</Link>
        </li>
        <li>
          <Link to="/home/qubits-mocks">Qubits Mocks / Viva</Link>
        </li>
        <li>
          <Link to="/home/checklist-panel">Checklist Panel</Link>
        </li>
        <li>
          <Link to="/home/idp">Individual Development Program (IDP)</Link>
        </li>
        <li>
          <Link to="/home/questions">Questions</Link>
        </li>
        <li>
          <Link to="/home/exam-certification">Exam Certification Request</Link>
        </li>
        <li>
          <Link to="/home/tail-record">Tail Record</Link>
        </li>
        <li>
          <Link to="/home/net-payable">Net Payable</Link>
        </li>
        <li>
          <Link to="/home/ess">Employees Self Service</Link>
        </li>
        <li>
          <Link to="/home/trainer-contact">Trainer Contact</Link>
        </li>
        <li>
          <Link to="/home/auto-resume">Auto Resume</Link>
        </li>
        <li>
          <Link to="/home/link-certification">Link Certification Employee</Link>
        </li>
        <li>
          <Link to="/home/employee-leave">Employee Leave Panel</Link>
        </li>
        <li>
          <Link to="/home/leave-approval">Leave Approval</Link>
        </li>
        <li>
          <Link to="/home/sales-assistant">Sales Assistant</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
