import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();

  // State for form inputs
  const [username, setUsername] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [password, setPassword] = useState("");
  const [notifications, setNotifications] = useState(true);
  const [theme, setTheme] = useState("Light");

  const handleSaveChanges = () => {
    console.log("Settings Updated:", {
      username,
      email,
      password,
      notifications,
      theme,
    });
    alert("Settings saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-600 text-white p-6">
      <div className="max-w-3xl mx-auto bg-blue-800 p-8 rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Settings</h1>

        {/* Form */}
        <form className="space-y-6">
          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-lg font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 rounded bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-lg font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-lg font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Notifications */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="notifications"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              className="h-5 w-5 text-blue-500 rounded focus:ring-blue-400"
            />
            <label htmlFor="notifications" className="ml-3 text-lg">
              Enable Notifications
            </label>
          </div>

          {/* Theme */}
          <div>
            <label htmlFor="theme" className="block text-lg font-medium mb-2">
              Theme
            </label>
            <select
              id="theme"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="w-full p-3 rounded bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option>Light</option>
              <option>Dark</option>
            </select>
          </div>

          {/* Save Button */}
          <button
            type="button"
            onClick={handleSaveChanges}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded"
          >
            Save Changes
          </button>

          {/* Back Button */}
          <button
            type="button"
            onClick={() => navigate("/")}
            className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 rounded mt-4"
          >
            Back to Dashboard
          </button>
        </form>
      </div>
    </div>
    );
};

export default Settings;