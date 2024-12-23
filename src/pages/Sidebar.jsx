import React from "react";
import { Link } from "react-router-dom";
import "../Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Navigation</h2>
      <ul>
        <li>
          <Link to="/home/vendordetail">Vendor</Link>
        </li>
        <li>
          <Link to="/home/technology">Technology</Link>
        </li>
        <li>
          <Link to="/home/adddomain">Add Domain</Link>
        </li>
        <li>
          <Link to="/home/editdomain">Edit Domain</Link>
        </li>
        <li>
          <Link to="/home/course-list">Course List</Link>
        </li>
        <li>
          <Link to="/home/add-course">Add Course</Link>
        </li>
        <li>
          <Link to="/edit-custom-course">Edit Custom Course</Link>
        </li>
        <li>
          <Link to="/home/course-sequence">Course Sequence</Link>
        </li>
        {/* <li> */}
        {/* <Link to="/add-category-pages">Add Category Pages</Link> */}
        {/* </li> */}
        {/* <li>
          <Link to="/add-featured-students">Add Featured Students</Link>
        </li> */}
        {/* <li>
          <Link to="/combo">Combo</Link>
        </li>
        <li>
          <Link to="/keywords-in-page">Keywords In Page</Link>
        </li> */}
        {/* <li>
          <Link to="/tech-pc">Tech PC</Link>
        </li> */}
        <li>
          <Link to="/home/examdetail">Exam Detail</Link>
        </li>
        {/* <li>
          <Link to="/trainer-course-relation">Trainer Course Relation</Link>
        </li> */}
        {/* <li>
          <Link to="/view-trainer-course-relation">
            View Trainer Course Relation
          </Link>
        </li> */}
        <li>
          <Link to="/home/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/home/sales-assistance">Sales Assistant</Link>
        </li>
        <li>
          <Link to="/home/techcall">Tech Call</Link>
        </li>
        <li>
          <Link to="/home/freelance-req">Freelance Requests</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
