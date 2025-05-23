import { useNavigate } from "react-router";

const ProfilePage = () => {
    const navigate = useNavigate();
  
    return (
        <p>
            You must log in to see your profile! {" "}
            <button onClick={() => navigate('/login')}>Login</button>
      </p>
    );
};

export default ProfilePage;
