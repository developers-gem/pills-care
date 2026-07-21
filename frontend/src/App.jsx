// import { Routes, Route } from "react-router-dom";

// import Header from "./components/Header";
// import Home from "./pages/Home";
// import Support from "./pages/Support";
// import Footer from "./components/Footer";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import Terms from "./pages/Terms";
// import DeleteUser from "./pages/DeleteUser";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import AdminLogin from "./pages/AdminLogin";
// import DashboardLayout from "./layouts/DashboardLayout";
// import Dashboard from "./pages/Dashboard";
// import Schedule from "./pages/Schedule";
// import Medications from "./pages/Medications";
// import History from "./pages/History";
// import Reports from "./pages/Reports";
// import Profile from "./pages/Profile";

// function App() {
//   return (
//     <>
//       <Header />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/support" element={<Support />} />
//         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//         <Route path="/terms" element={<Terms />} />
//         <Route path="/delete-user" element={<DeleteUser />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/admin-login" element={<AdminLogin />} />
//         <Route path="/dashboard" element={<DashboardLayout />}>
//           <Route index element={<Dashboard />} />
//           <Route path="medications" element={<Medications />} />
//           <Route path="schedule" element={<Schedule />} />
//           <Route path="history" element={<History />} />
//           <Route path="reports" element={<Reports />} />
//           <Route path="profile" element={<Profile />} />
//         </Route>
//       </Routes>
//       <Footer />
//     </>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import Home from "./pages/Home";
import Support from "./pages/Support";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import DeleteUser from "./pages/DeleteUser";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AdminLogin from "./pages/AdminLogin";

import Dashboard from "./pages/Dashboard";
import Schedule from "./pages/Schedule";
import Medications from "./pages/Medications";
import History from "./pages/History";
import Reports from "./pages/Reports";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      {/* Pages with Header + Footer */}

      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/support" element={<Support />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route path="/terms" element={<Terms />} />

        <Route path="/delete-user" element={<DeleteUser />} />

        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />

        <Route path="/admin-login" element={<AdminLogin />} />
      </Route>

      {/* Dashboard pages without Header/Footer */}

      <Route path="/admin/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />

        <Route path="medications" element={<Medications />} />

        <Route path="schedule" element={<Schedule />} />

        <Route path="history" element={<History />} />

        <Route path="reports" element={<Reports />} />

        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
