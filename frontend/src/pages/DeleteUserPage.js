import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { deleteUserService } from "../services";
import { useNavigate } from "react-router-dom";

export const DeleteUserPage = () => {
  const { token, setToken, setUser } = useContext(AuthContext);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await deleteUserService({ password, token });
      setMessage("Se ha Borrado correctamente el usuario");
      setToken("");
      setUser("");
      localStorage.clear();
      navigate("/");
    } catch (error) {
      setError(error.message);
      setMessage("");
    }
  };

  return (
    <section>
      <h1>Delete User:</h1>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="pass">Pon el password del usuario:</label>
          <input
            type="password"
            name="pass"
            id="pass"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>

        <button className="Done">Borrar</button>
        {error ? <p>{error}</p> : null}
        <p className="Message">{message}</p>
      </form>
    </section>
  );
};
