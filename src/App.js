import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// User Dashboard and Pages
import UserDashboard from "./pages/UserDashboard";
import Bookings from "./ComponentsUser/Bookings";
import Billing from "./ComponentsUser/Billing";
import Profile from "./ComponentsUser/Profile";
import Settings from "./ComponentsUser/Settings";
import ExploreService from "./ComponentsUser/ExploreService";
import ManageCars from "./ComponentsUser/ManageCars";

// Owner Dashboard and Pages
import OwnerDashboard from "./pages/OwnerDashboard";
import ManageCarsOwner from "./ComponentsOwner/ManageCarsOwner";
import Notifications from "./ComponentsOwner/Notifications";
import MechanicManagement from "./ComponentsOwner/MechanicManagement";
import StatisticsCards from "./ComponentsOwner/StatisticsCards";
import TaskList from "./ComponentsOwner/TaskList";
import TaskAssignmentForm from "./ComponentsOwner/TaskAssignmentForm";
import CarProgressTable from "./ComponentsOwner/CarProgressTable"; // Corrected path

// Mechanic Dashboard and Pages
import MechanicsDashboard from "./pages/MechanicDashboard";
import AssignedTasks from "./ComponentsEmployee/AssignedTasks";
import NotificationsEmployee from "./ComponentsEmployee/NotificationsEmployee";
import MechanicTools from "./ComponentsEmployee/MechanicTools";
import MechanicProgress from "./ComponentsEmployee/MechanicProgress";
import WorkHistory from "./ComponentsEmployee/WorkHistory";
import TaskDetails from "./ComponentsEmployee/TaskDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* User Dashboard and Pages */}
        <Route path="/" element={<UserDashboard />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/explore-service" element={<ExploreService />} />
        <Route path="/manage-cars" element={<ManageCars />} /> {/* User's Manage Cars */}

        {/* Owner Dashboard and Pages */}
        <Route path="/owner-dashboard" element={<OwnerDashboard />} />
        <Route path="/manage-cars-owner" element={<ManageCarsOwner />} /> {/* Owner's Manage Cars */}
        <Route path="/owner-notifications" element={<Notifications />} />
        <Route path="/mechanic-management" element={<MechanicManagement />} />
        <Route path="/statistics-cards" element={<StatisticsCards />} />
        <Route path="/task-list" element={<TaskList />} />
        <Route path="/task-assignment" element={<TaskAssignmentForm />} />
        <Route path="/car-progress-table" element={<CarProgressTable />} /> {/* Car Progress page */}

        {/* Mechanic Dashboard and Pages */}
        <Route path="/mechanics-dashboard" element={<MechanicsDashboard />} />
        <Route path="/assigned-tasks" element={<AssignedTasks />} />
        <Route path="/mechanic-notifications" element={<NotificationsEmployee />} />
        <Route path="/mechanic-tools" element={<MechanicTools />} />
        <Route path="/mechanic-progress" element={<MechanicProgress />} />
        <Route path="/work-history" element={<WorkHistory />} />

        {/* Task Details */}
        <Route path="/task-details" element={<TaskDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;