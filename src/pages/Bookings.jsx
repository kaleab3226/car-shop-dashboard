import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Bookings = () => {
  const [date, setDate] = useState(new Date());
  const [confirmedAppointments, setConfirmedAppointments] = useState([
    { service: "Oil Change", date: "Nov 28, 2024", status: "Confirmed" },
    { service: "Brake Check", date: "Nov 25, 2024", status: "Pending" },
  ]);

  const [previousAppointments] = useState([
    { car: "Toyota Corolla", service: "Tire Rotation", date: "Nov 20, 2024", status: "Completed" },
    { car: "Honda Civic", service: "Battery Replacement", date: "Nov 15, 2024", status: "Cancelled" },
  ]);

  const handleBack = () => {
    window.location.href = "/"; // Redirect back to Dashboard
  };

  const handleConfirmAppointment = () => {
    const newAppointment = {
      service: "Custom Service", // Placeholder service name
      date: date.toDateString(),
      status: "Pending", // Default to Pending
    };
    setConfirmedAppointments((prev) => [...prev, newAppointment]);
    alert(`Appointment added as Pending for ${date.toDateString()}`);
  };

  const handleUpdateStatus = (index, newStatus) => {
    const updatedAppointments = [...confirmedAppointments];
    updatedAppointments[index].status = newStatus;
    setConfirmedAppointments(updatedAppointments);
  };

  const handleDeleteAppointment = (index) => {
    if (window.confirm("Are you sure you want to delete this appointment?")) {
      const updatedAppointments = confirmedAppointments.filter((_, i) => i !== index);
      setConfirmedAppointments(updatedAppointments);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#2d2d2d",
        color: "white",
        padding: "20px",
      }}
    >
      {/* Back Button */}
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={handleBack}
          style={{
            backgroundColor: "#339af0",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          ← Back to Dashboard
        </button>
      </div>

      {/* Page Title */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Bookings
      </h1>

      {/* Calendar for New Appointment */}
      <div
        style={{
          backgroundColor: "#444",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "1.5rem",
            marginBottom: "20px",
          }}
        >
          Book a New Appointment
        </h2>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <Calendar
            onChange={(newDate) => setDate(newDate)}
            value={date}
            className="custom-calendar"
          />
        </div>
        <p style={{ textAlign: "center", marginBottom: "20px" }}>
          Selected Date: {date.toDateString()}
        </p>
        <button
          onClick={handleConfirmAppointment}
          style={{
            backgroundColor: "#339af0",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            display: "block",
            margin: "0 auto",
          }}
        >
          Confirm Appointment
        </button>
      </div>

      {/* Confirmed Appointments */}
      <div
        style={{
          backgroundColor: "#444",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "1.5rem",
            marginBottom: "20px",
          }}
        >
          Confirmed Appointments
        </h2>
        <ul
          style={{listStyle: "none",
            padding: "0",
            margin: "0",
            maxHeight: "300px",
            overflowY: "auto",
          }}
        >
          {confirmedAppointments.map((appointment, index) => (
            <li
              key={index}
              style={{
                backgroundColor: "#555",
                marginBottom: "10px",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <p>
                <strong>Service:</strong> {appointment.service}
              </p>
              <p>
                <strong>Date:</strong> {appointment.date}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span
                  style={{
                    color:
                      appointment.status === "Confirmed"
                        ? "green"
                        : appointment.status === "Pending"
                        ? "yellow"
                        : "red",
                  }}
                >
                  {appointment.status}
                </span>
              </p>
              {appointment.status === "Pending" && (
                <button
                  onClick={() => handleUpdateStatus(index, "Confirmed")}
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    padding: "5px 10px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginTop: "10px",
                    marginRight: "10px",
                  }}
                >
                  Mark as Confirmed
                </button>
              )}
              <button
                onClick={() => handleDeleteAppointment(index)}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Previous Appointments */}
      <div
        style={{
          backgroundColor: "#444",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "1.5rem",
            marginBottom: "20px",
          }}
        >
          Previous Appointments
        </h2>
        <table
          style={{
            width: "100%",
            color: "white",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th style={{ borderBottom: "1px solid #555", padding: "10px" }}>Car</th>
              <th style={{ borderBottom: "1px solid #555", padding: "10px" }}>Service Type</th>
              <th style={{ borderBottom: "1px solid #555", padding: "10px" }}>Date</th>
              <th style={{ borderBottom: "1px solid #555", padding: "10px" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {previousAppointments.map((appointment, index) => (
              <tr key={index}>
                <td style={{ padding: "10px" }}>{appointment.car}</td>
                <td style={{ padding: "10px" }}>{appointment.service}</td>
                <td style={{ padding: "10px" }}>{appointment.date}</td>
                <td
                  style={{
                    padding: "10px",
                    color:
                      appointment.status === "Completed"
                        ? "green"
                        : appointment.status === "Pending"
                        ? "yellow"
                        : "red",
                  }}
                >
                  {appointment.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
  };
  
  export default Bookings;