import { useContext } from "react";
import UserContext from "./UserContext";

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "12px",
        padding: "20px 30px",
        margin: "20px auto",
        width: "fit-content",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        backgroundColor: "white",
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <p style={{ fontSize: "18px", marginBottom: "10px" }}>
        <strong>Name:</strong> {userData.name}
      </p>
      <p style={{ fontSize: "18px" }}>
        <strong>Email:</strong> {userData.email}
      </p>
    </div>
  );
}

export default UserDetails;
