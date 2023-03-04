import { NavLink } from "react-router-dom";
import useUser from "../hooks/useUser";
import { NewsList } from "../components/NewsList";
import { useState } from "react";

export const NewsByIdUserPage = () => {
  const [visible, setVisible] = useState(false);
  const {
    news,
    removeNews,
    addLike,
    addDislike,
    removeLike,
    removeDislike,
    addNewPhoto,
  } = useUser();

  const handleForm = async (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <h1>Estas son vuestras Noticias: </h1>
      <form onSubmit={handleForm}>
        <fieldset>
          <button className="Done" onClick={() => setVisible(true)}>
            Mostrar
          </button>
        </fieldset>
      </form>
      {visible ? (
        <NewsList
          newss={news}
          removeNews={removeNews}
          addLike={addLike}
          addDislike={addDislike}
          removeLike={removeLike}
          removeDislike={removeDislike}
          addNewPhoto={addNewPhoto}
        />
      ) : (
        `Pulsa el boton para ver las Noticias`
      )}
      <nav>
        <NavLink to={"/"}>HomePage</NavLink>
      </nav>
    </section>
  );
};
