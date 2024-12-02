import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const TaskDetails = () => {
  const { taskId } = useParams(); // Get the taskId from the URL parameter
  const navigate = useNavigate(); // For navigation
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch task details when the component loads or taskId changes
  useEffect(() => {
    const fetchTaskDetail = async () => {
      try {
        const response = await fetch(`/api/tasks/${taskId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch task details");
        }
        const data = await response.json();
        setTask(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTaskDetail(); // Fetch task details when the component is mounted
  }, [taskId]); // This will trigger when taskId changes in the URL

  // Function to update task status
  const updateTaskStatus = async (status) => {
    try {
      const response = await fetch(`/api/tasks/${taskId}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (!response.ok) {
        throw new Error("Failed to update task status");
      }
      setTask({ ...task, status }); // Update the task status in state
      alert("Task status updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Error updating task status.");
    }
  };

  // Format date to local string with a fallback for invalid date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) {
      return "Invalid Date";
    }
    return date.toLocaleString();
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
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-red-600">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-600 text-white p-8">
      <div className="max-w-4xl mx-auto bg-blue-700 p-6 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-6">Task Details</h2>

        <div className="space-y-4">
          <div>
            <strong>Car:</strong> {task.car}
          </div>
          <div>
            <strong>Service Type:</strong> {task.serviceType}
          </div>
          <div>
            <strong>Priority:</strong> {task.priority}
          </div>
          <div>
            <strong>Status:</strong> {task.status}
          </div>
          <div>
            <strong>Deadline:</strong> {formatDate(task.deadline)}
          </div>
          <div>
            <strong>Notes:</strong> {task.notes || "No notes provided."}
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
            onClick={() => navigate("/assigned-tasks")}
            className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
          >
            Back to Task List
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;