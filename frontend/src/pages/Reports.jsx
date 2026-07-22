// import React from "react";
// import {
//   FaUsers,
//   FaPills,
//   FaMoneyBillWave,
//   FaHeartbeat,
//   FaCheckCircle,
//   FaCapsules,
//   FaBell,
//   FaChartLine,
// } from "react-icons/fa";

// import "../PagesStyle/reports.css";

// const Reports = () => {
//   return (
//     <div className="reports-container">
//       <div className="reports-header">
//         <h1>Reports Dashboard</h1>
//         <p>Overview of Pills-Care Application</p>
//       </div>

//       <div className="report-cards">
//         <div className="report-card">
//           <FaUsers />
//           <h2>245</h2>
//           <p>Total Users</p>
//         </div>

//         <div className="report-card">
//           <FaPills />
//           <h2>1238</h2>
//           <p>Medicines</p>
//         </div>

//         <div className="report-card">
//           <FaMoneyBillWave />
//           <h2>₹52,000</h2>
//           <p>Revenue</p>
//         </div>

//         <div className="report-card">
//           <FaHeartbeat />
//           <h2>92%</h2>
//           <p>Adherence</p>
//         </div>
//       </div>

//       <div className="reports-grid">
//         <div className="report-box">
//           <h3>
//             <FaChartLine />
//             Statistics
//           </h3>

//           <ul>
//             <li>
//               New Users This Month <span>+32</span>
//             </li>
//             <li>
//               Premium Users <span>87</span>
//             </li>
//             <li>
//               Completed Doses <span>1254</span>
//             </li>
//             <li>
//               Missed Doses <span>42</span>
//             </li>
//           </ul>
//         </div>

//         <div className="report-box">
//           <h3>
//             <FaBell />
//             Recent Activities
//           </h3>

//           <ul>
//             <li>Rahul purchased Premium Plan</li>
//             <li>Aman added 3 medicines</li>
//             <li>Priya completed all reminders</li>
//             <li>Neha upgraded to Pro</li>
//             <li>Mohit missed evening dose</li>
//           </ul>
//         </div>

//         <div className="report-box">
//           <h3>
//             <FaCapsules />
//             Top Medicines
//           </h3>

//           <ul>
//             <li>Paracetamol</li>
//             <li>Vitamin D</li>
//             <li>Metformin</li>
//             <li>Iron Tablets</li>
//             <li>Calcium</li>
//           </ul>
//         </div>

//         <div className="report-box">
//           <h3>
//             <FaCheckCircle />
//             Quick Summary
//           </h3>

//           <ul>
//             <li>Total Users : 245</li>
//             <li>Active Plans : 87</li>
//             <li>Total Medicines : 1238</li>
//             <li>Total Revenue : ₹52,000</li>
//             <li>Reminder Success : 92%</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Reports;

import React from "react";
import {
  FaUsers,
  FaPills,
  FaMoneyBillWave,
  FaHeartbeat,
  FaBell,
  FaCrown,
  FaChartLine,
  FaUserCheck,
  FaFilePdf,
  FaFileExcel,
  FaPrint,
  FaCheckCircle,
} from "react-icons/fa";

import "../PagesStyle/reports.css";

const Reports = () => {
  return (
    <div className="reports-container">
      {/* Header */}

      <div className="reports-header">
        <div>
          <h1>Reports Dashboard</h1>
          <p>Overview of Pills-Care Application</p>
        </div>

        <select className="report-filter">
          <option>Today</option>
          <option>This Week</option>
          <option>This Month</option>
          <option>This Year</option>
        </select>
      </div>

      {/* Summary Cards */}

      <div className="summary-cards">
        <div className="summary-card">
          <FaUsers />
          <h2>245</h2>
          <p>Total Users</p>
        </div>

        <div className="summary-card">
          <FaPills />
          <h2>1238</h2>
          <p>Total Medicines</p>
        </div>

        <div className="summary-card">
          <FaMoneyBillWave />
          <h2>₹52,000</h2>
          <p>Total Revenue</p>
        </div>

        <div className="summary-card">
          <FaCrown />
          <h2>87</h2>
          <p>Premium Users</p>
        </div>

        <div className="summary-card">
          <FaBell />
          <h2>5400</h2>
          <p>Reminders Sent</p>
        </div>

        <div className="summary-card">
          <FaHeartbeat />
          <h2>92%</h2>
          <p>Adherence Rate</p>
        </div>
      </div>

      {/* Statistics */}

      <div className="reports-grid">
        <div className="report-box">
          <h3>
            <FaUsers />
            User Statistics
          </h3>

          <ul>
            <li>
              Total Users <span>245</span>
            </li>
            <li>
              Male <span>130</span>
            </li>
            <li>
              Female <span>115</span>
            </li>
            <li>
              Admins <span>2</span>
            </li>
            <li>
              Premium Users <span>87</span>
            </li>
            <li>
              Free Users <span>158</span>
            </li>
          </ul>
        </div>

        <div className="report-box">
          <h3>
            <FaPills />
            Medication Statistics
          </h3>

          <ul>
            <li>
              Total Medicines <span>1238</span>
            </li>
            <li>
              Active <span>620</span>
            </li>
            <li>
              Completed <span>470</span>
            </li>
            <li>
              Paused <span>82</span>
            </li>
            <li>
              Expired <span>66</span>
            </li>
          </ul>
        </div>

        <div className="report-box">
          <h3>
            <FaCrown />
            Subscription Statistics
          </h3>

          <ul>
            <li>
              Free Plan <span>158</span>
            </li>
            <li>
              Premium <span>67</span>
            </li>
            <li>
              Pro <span>20</span>
            </li>
            <li>
              Expired <span>8</span>
            </li>
            <li>
              Cancelled <span>3</span>
            </li>
          </ul>
        </div>

        <div className="report-box">
          <h3>
            <FaBell />
            Reminder Statistics
          </h3>

          <ul>
            <li>
              Sent <span>5400</span>
            </li>
            <li>
              Completed <span>5000</span>
            </li>
            <li>
              Missed <span>220</span>
            </li>
            <li>
              Pending <span>150</span>
            </li>
            <li>
              Skipped <span>30</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Revenue */}

      <div className="report-box full-width">
        <h3>
          <FaMoneyBillWave />
          Revenue Summary
        </h3>

        <div className="revenue-grid">
          <div className="revenue-card">
            <h4>Today</h4>
            <p>₹2,450</p>
          </div>

          <div className="revenue-card">
            <h4>This Week</h4>
            <p>₹17,000</p>
          </div>

          <div className="revenue-card">
            <h4>This Month</h4>
            <p>₹52,000</p>
          </div>

          <div className="revenue-card">
            <h4>This Year</h4>
            <p>₹6,84,000</p>
          </div>
        </div>
      </div>

      {/* Bottom Grid */}

      <div className="reports-grid">
        {/* Activities */}

        <div className="report-box">
          <h3>
            <FaChartLine />
            Recent Activities
          </h3>

          <ul className="activity-list">
            <li>✓ Rahul purchased Premium Plan</li>

            <li>✓ Aman added new medication</li>

            <li>✓ Priya completed reminders</li>

            <li>✓ Neha upgraded to Pro</li>

            <li>✓ Mohit missed evening medicine</li>

            <li>✓ Subscription renewed successfully</li>
          </ul>
        </div>

        {/* Top Medicines */}

        <div className="report-box">
          <h3>
            <FaPills />
            Top Medicines
          </h3>

          <ul className="activity-list">
            <li>Paracetamol</li>

            <li>Vitamin D</li>

            <li>Metformin</li>

            <li>Iron Tablets</li>

            <li>Calcium</li>

            <li>Vitamin C</li>
          </ul>
        </div>
      </div>

      {/* Top Users */}

      <div className="report-box full-width">
        <h3>
          <FaUserCheck />
          Top Active Users
        </h3>

        <table className="top-users-table">
          <thead>
            <tr>
              <th>Name</th>

              <th>Medicines</th>

              <th>Completion</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Rahul</td>
              <td>15</td>
              <td>98%</td>
            </tr>

            <tr>
              <td>Aman</td>
              <td>12</td>
              <td>97%</td>
            </tr>

            <tr>
              <td>Neha</td>
              <td>10</td>
              <td>95%</td>
            </tr>

            <tr>
              <td>Priya</td>
              <td>9</td>
              <td>94%</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Quick Summary */}

      <div className="report-box full-width">
        <h3>
          <FaCheckCircle />
          Quick Summary
        </h3>

        <div className="summary-list">
          <div>
            Total Users : <strong>245</strong>
          </div>

          <div>
            Premium Members : <strong>87</strong>
          </div>

          <div>
            Total Medicines : <strong>1238</strong>
          </div>

          <div>
            Total Revenue : <strong>₹52,000</strong>
          </div>

          <div>
            Reminder Success : <strong>92%</strong>
          </div>

          <div>
            Most Used Medicine : <strong>Paracetamol</strong>
          </div>
        </div>
      </div>

      {/* Export Buttons */}

      <div className="export-buttons">
        <button>
          <FaFilePdf />
          Export PDF
        </button>

        <button>
          <FaFileExcel />
          Export Excel
        </button>

        <button>
          <FaPrint />
          Print
        </button>
      </div>
    </div>
  );
};

export default Reports;
