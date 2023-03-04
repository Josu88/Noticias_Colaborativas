import { Link } from "react-router-dom";

export const Auth = () => {
  return (
    <ul>
      <li>
        <Link to={"/UserMenu"}>UserMenu</Link>
      </li>
      <li>
        <Link to={"/NewsMenu"}>NewsMenu</Link>
      </li>
    </ul>
  );
};
