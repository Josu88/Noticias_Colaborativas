import { useContext, useState } from "react";
import {
  listIdUserService,
  listUserNameService,
  logInUserService,
} from "../services";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { setToken, setUser, setIdUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const loginToken = await logInUserService({ email, password });
      const { userName } = await listUserNameService(loginToken);
      const { iduser } = await listIdUserService(loginToken);

      setToken(loginToken);
      setUser(userName[0].username);
      setIdUser(iduser[0].id);
      localStorage.setItem("user", userName[0].username);
      localStorage.setItem("iduser", iduser[0].id);

      setMessage("Te has logeado correctamente");

      navigate("/registed");
    } catch (error) {
      setError(error.message);
      setMessage("");
    }
  };

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            name="pass"
            id="pass"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>

        <button className="Done">Login</button>
        {error ? <p>{error}</p> : null}
        <p className="Menssage">{message}</p>
      </form>
    </section>
  );
};
