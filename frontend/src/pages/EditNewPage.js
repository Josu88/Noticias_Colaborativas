import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { editNewService } from "../services";

export const EditNewPage = () => {
  const { token } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [idNew, setIdnew] = useState("");
  const [title, setTitle] = useState("");
  const [leadIn, setLeadIn] = useState("");
  const [text, setText] = useState("");
  const [theme, setTheme] = useState("");
  const [message, setMessage] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await editNewService({ idNew, title, leadIn, text, theme, token });
      setMessage(`Se ha editado correctamente la noticia con id ${idNew}`);
    } catch (error) {
      setError(error.message);
      setMessage("");
    }
  };
  return (
    <section>
      <form className="edit-news" onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="idNew">Pon el id de la Noticia a modificar</label>
          <input
            type="text"
            name="idNew"
            id="idNew"
            value={idNew}
            required
            onChange={(e) => setIdnew(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="datosNew">Datos para introducir en la Noticia:</label>
          <label htmlFor="title">titulo</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="leadIn">leadIn</label>
          <input
            type="text"
            name="leadIn"
            id="leadIn"
            value={leadIn}
            required
            onChange={(e) => setLeadIn(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="text">Text</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            required
            onChange={(e) => setText(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="theme">tema</label>
          <input
            type="text"
            name="theme"
            id="theme"
            value={theme}
            required
            onChange={(e) => setTheme(e.target.value)}
          />
        </fieldset>

        <button className="Done">Edit</button>
        {error ? <p>{error}</p> : null}
        <p className="Message">{message}</p>
      </form>
    </section>
  );
};
