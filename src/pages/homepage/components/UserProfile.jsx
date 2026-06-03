import "../../../styles/UserProfile.css";
import contactIcon from "../../../assets/images/contact.png";

function UserProfile() {
  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-header">
          <img
            src='https://randomuser.me/api/portraits/thumb/men/22.jpg'
            alt="Profile"
            className="profile-image"
          />
          <h2>John Doe</h2>
          <p>john.doe@gmail.com</p>
        </div>

        <div className="profile-details">
          <div className="detail-item">
            <label>Full Name</label>
            <span>John Doe</span>
          </div>

          <div className="detail-item">
            <label>Email</label>
            <span>john.doe@gmail.com</span>
          </div>

          <div className="detail-item">
            <label>Phone</label>
            <span>+91 9876543210</span>
          </div>

          <div className="detail-item">
            <label>Address</label>
            <span>Surat, Gujarat, India</span>
          </div>
        </div>

        <div className="profile-actions">
          <button className="edit-btn">Edit Profile</button>
          <button className="logout-btn">Logout</button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;