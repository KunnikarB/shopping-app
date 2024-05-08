import { useNavigate } from "react-router"; 
import "../index.css";
// set up the logout button and remove the user from local storage when clicked logout.
const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    // navigate to the home page after logout.
    navigate("/Home ");
  };

  return (
    <button onClick={handleLogout} className="btn-logout"  >
      Logout
    </button>
  );
}

export default Logout;