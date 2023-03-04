import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const UserMenuPage = () => {
  const { user } = useContext(AuthContext);

  return user ? (
    <nav>
      <ul>
        <li>
          <h2>User Menu:</h2>
        </li>
        <li>
          <Link to={"/register"}>Register</Link>
        </li>
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
        <li>
          <Link to={"/delUser"}>Delete User</Link>
        </li>
        <li>
          <Link to={"/EditEmUsNam"}>Edit Email and UserName</Link>
        </li>
        <li>
          <Link to={"/user/password"}>Edit Password</Link>
        </li>
      </ul>
    </nav>
  ) : (
    <nav>
      <ul>
        <li>
          <h2>User Menu:</h2>
        </li>
        <li>
          <Link to={"/register"}>Register</Link>
        </li>
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      </ul>
    </nav>
  );
};
