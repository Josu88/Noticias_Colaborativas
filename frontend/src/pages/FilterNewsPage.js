import { NavLink } from "react-router-dom";
import { useState } from "react";
import { getFilterThemeNewsService } from "../services";
import useFilterNews from "../hooks/useFilterNews";
import { NewsList } from "../components/NewsList";

export const FilterNewsPage = () => {
  const [theme, setTheme] = useState([]);
  const { news } = useFilterNews(theme);
  const [visible, setVisible] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    getFilterThemeNewsService(theme);
  };

  return (
    <>
      <section>
        <h2>Lista mensajes filtrados por Tema</h2>
        <form onSubmit={handleForm}>
          <fieldset>
            <label htmlFor="NewTheme">Tema de la noticia a buscar?: </label>
            <input
              type="text"
              id="inputTheme"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <button className="Done" onClick={() => setVisible(true)}>
              Mostrar
            </button>
          </fieldset>
        </form>
        <h1>news</h1>
        {visible ? (
          <NewsList newss={news} />
        ) : (
          `Pulsa el boton para ver las Noticias`
        )}
        <nav>
          <NavLink to={"/"}>HomePage</NavLink>
        </nav>
      </section>
    </>
  );
};
