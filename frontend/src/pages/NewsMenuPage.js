import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const NewsMenuPage = () => {
  const { user } = useContext(AuthContext);

  return user ? (
    <nav>
      <ul>
        <li>
          <h2>News Menu:</h2>
        </li>
        <li>
          <Link to={"/"}>ListNews</Link>
        </li>
        <li>
          <Link to={"/addNews"}>AddNewNews</Link>
        </li>
        <li>
          <Link to={"/FilterNews"}>FilterNews</Link>
        </li>
        <li>
          <Link to={"/EditNew"}>EditNews</Link>
        </li>
        <li>
          <Link to={"/UserNews"}>News By IdNew</Link>
        </li>
        <li>
          <Link to={"/profile"}>News By IdUser</Link>
        </li>
      </ul>
    </nav>
  ) : (
    <nav>
      <ul>
        <li>
          <h2> News Menu:</h2>
        </li>
        <li>
          <Link to={"/"}>ListNews</Link>
        </li>
        <li>
          <Link to={"/UserNews"}>News By IdNew</Link>
        </li>
      </ul>
    </nav>
  );
};
