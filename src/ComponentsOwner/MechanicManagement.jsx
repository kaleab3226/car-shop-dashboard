import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MechanicManagement = () => {
  const navigate = useNavigate();
  const [mechanics, setMechanics] = useState([]);
  const [newMechanic, setNewMechanic] = useState({
    name: "",
    email: "",
    phone: "",
    expertise: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [selectedMechanic, setSelectedMechanic] = useState(null);

  // Example mechanics (for testing purposes)
  const exampleMechanics = [
    { id: 1, name: "John Doe", email: "johndoe@example.com", phone: "123-456-7890", expertise: "Engine Specialist" },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com", phone: "987-654-3210", expertise: "Brake Technician" },
    { id: 3, name: "Tom Brown", email: "tombrown@example.com", phone: "555-123-4567", expertise: "Electrical Systems" },
  ];

  // Fetch mechanics when the component loads (using example data here)
  useEffect(() => {
    setMechanics(exampleMechanics); // Simulating a fetch request with example data
  }, []);

  // Add a new mechanic
  const handleAddMechanic = async (e) => {
    e.preventDefault();
    const newMechanicData = { ...newMechanic, id: mechanics.length + 1 }; // Give new mechanic a unique ID
    setMechanics([...mechanics, newMechanicData]);
    setNewMechanic({ name: "", email: "", phone: "", expertise: "" }); // Reset the form
  };

  // Remove a mechanic
  const handleRemoveMechanic = (id) => {
    setMechanics(mechanics.filter((mechanic) => mechanic.id !== id));
  };

  // Edit a mechanic
  const handleEditMechanic = async (e) => {
    e.preventDefault();
    const updatedMechanic = { ...selectedMechanic };
    setMechanics(
      mechanics.map((mechanic) =>
        mechanic.id === updatedMechanic.id ? updatedMechanic : mechanic
      )
    );
    setEditMode(false);
    setSelectedMechanic(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8">
      {/* Back Button */}
      <button
        onClick={() => navigate("/owner-dashboard")}
        className="text-blue-400 hover:text-white mb-4 text-lg"
      >
        &larr; Back to Owner Dashboard
      </button>

      <div className="max-w-6xl mx-auto bg-gray-700 p-8 rounded-lg shadow-md">
        {/* Header */}
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">Mechanic Management</h2>

        {/* Add/Edit Mechanic Form */}
        <form onSubmit={editMode ? handleEditMechanic : handleAddMechanic} className="bg-gray-800 p-6 rounded-lg shadow-md mb-8">
          <div className="space-y-4">
            <div>
              <label className="text-lg">Name</label>
              <input
                type="text"
                value={editMode ? selectedMechanic?.name : newMechanic.name}
                onChange={(e) =>
                  editMode
                    ? setSelectedMechanic({ ...selectedMechanic, name: e.target.value })
                    : setNewMechanic({ ...newMechanic, name: e.target.value })
                }
                required
                className="w-full p-3 rounded-md bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-lg">Email</label>
              <input
                type="email"
                value={editMode ? selectedMechanic?.email : newMechanic.email}
                onChange={(e) =>
                  editMode
                    ? setSelectedMechanic({ ...selectedMechanic, email: e.target.value })
                    : setNewMechanic({ ...newMechanic, email: e.target.value })
                }
                required
                className="w-full p-3 rounded-md bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-lg">Phone</label>
              <input
                type="text"
                value={editMode ? selectedMechanic?.phone : newMechanic.phone}
                onChange={(e) =>
                  editMode
                    ? setSelectedMechanic({ ...selectedMechanic, phone: e.target.value })
                    : setNewMechanic({ ...newMechanic, phone: e.target.value })
                }
                required
                className="w-full p-3 rounded-md bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-lg">Expertise</label>
              <input
                type="text"
                value={editMode ? selectedMechanic?.expertise : newMechanic.expertise}
                onChange={(e) =>
                  editMode
                    ? setSelectedMechanic({ ...selectedMechanic, expertise: e.target.value })
                    : setNewMechanic({ ...newMechanic, expertise: e.target.value })
                }
                required
                className="w-full p-3 rounded-md bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex space-x-4">
              <button
                type="submit"
                className="w-1/2 p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
              >
                {editMode ? "Update Mechanic" : "Add Mechanic"}
              </button>
              {editMode && (
                <button
                  type="button"
                  onClick={() => setEditMode(false)}
                  className="w-1/2 p-3 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-300"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </form>

        {/* Mechanics List */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-center text-blue-300">Current Mechanics</h3>
          <div className="space-y-4">
            {mechanics.map((mechanic) => (
              <div
                key={mechanic.id}
                className="bg-gray-800 p-4 rounded-lg shadow-md flex justify-between items-center"
              >
                <div>
                  <p>
                    <strong>Name:</strong> {mechanic.name} <br />
                    <strong>Email:</strong> {mechanic.email} <br />
                    <strong>Phone:</strong> {mechanic.phone} <br />
                    <strong>Expertise:</strong> {mechanic.expertise}
                  </p>
                </div>
                <div className="space-x-4">
                  <button
                    onClick={() => {
                      setEditMode(true);
                      setSelectedMechanic(mechanic);
                    }}
                    className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition duration-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleRemoveMechanic(mechanic.id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MechanicManagement;