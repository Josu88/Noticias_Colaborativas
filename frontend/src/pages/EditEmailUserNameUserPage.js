import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { editUserEmailUserNameService } from "../services";

export const EditEmailUserNameUserPage = () => {
  const { token, setUser } = useContext(AuthContext);
  const [newEmail, setNewEmail] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    await editUserEmailUserNameService({ newEmail, newUsername, token });
    setUser(newUsername);
    localStorage.setItem("user", newUsername);
    setMessage(
      "Se ha cambiado el Email y el UserName del usuario correctamente"
    );

    try {
    } catch (error) {
      setError(error.message);
      setMessage("");
    }
  };

  return (
    <section>
      <h1>Edit Email and UserName</h1>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="newEmail">NewEmail</label>
          <input
            type="email"
            name="email"
            id="email"
            value={newEmail}
            required
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="newUsername">newUsername</label>
          <input
            type="text"
            name="username"
            id="username"
            value={newUsername}
            required
            onChange={(e) => setNewUsername(e.target.value)}
          />
        </fieldset>

        <button className="Done">Edit</button>
        {error ? <p>{error}</p> : null}
        <p className="Message">{message}</p>
      </form>
    </section>
  );
};
