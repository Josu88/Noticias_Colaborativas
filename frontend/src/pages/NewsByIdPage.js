import { NavLink } from "react-router-dom";
import { useState } from "react";
import useNew from "../hooks/useNew";
import { News } from "../components/News";

export const NewsByIdPage = () => {
  const [idNews, setIdNews] = useState([]);
  const { news } = useNew(idNews);
  const [visible, setVisible] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <h2>Lista mensajes por id de mensaje</h2>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="NewId">id de Noticia a Buscar?: </label>
          <input
            type="text"
            id="inputId"
            value={idNews}
            onChange={(e) => setIdNews(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <button className="Done" onClick={() => setVisible(true)}>
            Mostrar
          </button>
        </fieldset>
      </form>
      <section>
        <h1>News by idNew:</h1>
        {visible ? (
          <News news={news} />
        ) : (
          `Pulsa el boton para ver las Noticias`
        )}
      </section>
      <nav>
        <NavLink to={"/"}>HomePage</NavLink>
      </nav>
    </section>
  );
};
