import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const TaskDetails = () => {
  const { taskId } = useParams(); // Get the taskId from the URL parameter
  const navigate = useNavigate(); // For navigation
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Simulating the example tasks inside useEffect
  useEffect(() => {
    const exampleTasks = [
      {
        id: 1,
        car: "Toyota Corolla",
        serviceType: "Oil Change",
        mechanicName: "John Doe",
        priority: "Medium",
        status: "Pending",
        deadline: "2024-12-15T10:00:00",
        notes: "Full synthetic oil requested.",
      },
      {
        id: 2,
        car: "Honda Civic",
        serviceType: "Tire Rotation",
        mechanicName: "Jane Smith",
        priority: "High",
        status: "In Progress",
        deadline: "2024-12-16T14:00:00",
        notes: "Rotating all four tires.",
      },
      {
        id: 3,
        car: "Ford Focus",
        serviceType: "Brake Inspection",
        mechanicName: "John Doe",
        priority: "Low",
        status: "Completed",
        deadline: "2024-12-12T09:00:00",
        notes: "Brakes are in good condition.",
      },
    ];

    const foundTask = exampleTasks.find((task) => task.id === parseInt(taskId));
    if (foundTask) {
      setTask(foundTask);
      setLoading(false);
    } else {
      setError("Task not found");
      setLoading(false);
    }
  }, [taskId]);

  // Format the date to a readable string
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return isNaN(date) ? "Invalid Date" : date.toLocaleString();
  };

  // Simulate updating task status (this will be connected to a backend later)
  const updateTaskStatus = (status) => {
    const updatedTask = { ...task, status };
    setTask(updatedTask);
    alert(`Task status updated to: ${status}`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-blue-600">Loading task details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-600 text-white p-8 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4">Oops! Something went wrong...</h2>
        <p className="text-xl">{error}</p>
        <div className="mt-6">
          <button
            onClick={() => navigate("/mechanics-dashboard")}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Back to Mechanic Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-600 text-white p-8">
      <div className="max-w-4xl mx-auto bg-blue-700 p-6 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-6">Task Details</h2>

        <div className="space-y-4">
          <div>
            <strong className="text-xl">Car:</strong> {task.car}
          </div>
          <div>
            <strong className="text-xl">Service Type:</strong> {task.serviceType}
          </div>
          <div>
            <strong className="text-xl">Mechanic:</strong> {task.mechanicName}
          </div>
          <div>
            <strong className="text-xl">Priority:</strong> {task.priority}
          </div>
          <div>
            <strong className="text-xl">Status:</strong>{" "}
            <span
              className={`px-4 py-2 rounded-full text-white ${
                task.status === "Pending"
                  ? "bg-yellow-500"
                  : task.status === "In Progress"
                  ? "bg-blue-500"
                  : "bg-green-500"
              }`}
            >
              {task.status}
            </span>
          </div>
          <div>
            <strong className="text-xl">Deadline:</strong> {formatDate(task.deadline)}
          </div>
          <div>
            <strong className="text-xl">Notes:</strong> {task.notes || "No notes provided."}
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center">
          {task.status === "Pending" && (
            <button
              onClick={() => updateTaskStatus("In Progress")}
              className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
            >
              Start Task
            </button>
          )}
          {task.status === "In Progress" && (
            <button
              onClick={() => updateTaskStatus("Completed")}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Complete Task
            </button>
          )}
        </div>

        <div className="mt-4 text-center">
          <button
            onClick={() => navigate("/mechanics-dashboard")}
            className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
          >
            Back to Mechanic Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;