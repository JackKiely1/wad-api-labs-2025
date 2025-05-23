import { Link } from "react-router";

const LoginPage = () => {

    return (
        <>
            <h2>Login page</h2>
            <p>You must log in to view the protected pages </p>
            
            <input id="username" placeholder="user name"></input><br />
            <input id="password" type="password" placeholder="password"></input><br />
            {/* Login web form  */}
            <button>Log in</button>
            
            <p>Not Registered?
                <Link to="/signup">Sign Up!</Link></p>
        </>
    );
};

export default LoginPage;
