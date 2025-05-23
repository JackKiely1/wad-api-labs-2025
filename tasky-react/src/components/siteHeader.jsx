import { useContext } from "react"; 
import { useNavigate, Link } from "react-router";
import { AuthContext } from "../contexts/authContext";

const Header = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <header className="site-header">
    <div className="left-section">
      <Link to="/" className="home-link">Tasky</Link>
      <nav className="nav-links">
        {context.isAuthenticated ? (
          <>
            <Link to="/tasks">Tasks</Link>
            <Link to="/profile">Profile</Link>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </nav>
      </div>
      <div>
        {context.isAuthenticated ? (
          <>
            <span>Welcome {context.userName}! </span> 
            <button onClick={() => context.signout()}>Sign out</button>
          </>
        ) : (
          <>
            <span>You are not logged in </span> 
            <button onClick={() => navigate("/login")}>Login</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
