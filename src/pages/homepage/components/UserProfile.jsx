import "../../../styles/UserProfile.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { logout } from "../../../redux/authSlice";

function UserProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");

    dispatch(logout());

    navigate("/");
  };

  if (!user) {
    return (
      <div className="profile-page">
        <div className="profile-card">
          <h2>User Not Logged In</h2>

          <Link to="/login">
            <button className="edit-btn">Login</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-header">
          <img
            src="https://randomuser.me/api/portraits/thumb/men/22.jpg"
            alt="Profile"
            className="profile-image"
          />

          <h2>{user.name}</h2>

          <p>{user.email}</p>
        </div>

        <div className="profile-details">
          <div className="detail-item">
            <label>Name</label>
            <span>{user.name}</span>
          </div>

          <div className="detail-item">
            <label>Email</label>
            <span>{user.email}</span>
          </div>

          <div className="detail-item">
            <label>Phone</label>
            <span>+91 {user.phone}</span>
          </div>

          <div className="detail-item">
            <label>Address</label>
            <span>
              {Array.isArray(user.address)
                ? user.address.join(", ")
                : user.address || "Not Added"}
            </span>
          </div>
        </div>

        <div className="profile-actions">
          <Link to="/profile/editProfile">
            <button className="edit-btn">
              Edit Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;