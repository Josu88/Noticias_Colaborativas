import "../App.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import useNews from "../hooks/useNews";
import { NewNews } from "../components/NewNews";
import { NewsList } from "../components/NewsList";

export const RegistedPage = () => {
  const {
    news,
    removeNews,
    addLike,
    addDislike,
    removeLike,
    removeDislike,
    addNewPhoto,
    newNews,
  } = useNews();

  const navigate = useNavigate();
  const { token, user, setToken, setUser, setIdUser } = useContext(AuthContext);

  const LogoutButton = () => {
    setToken("");
    setUser("");
    setIdUser("");
    localStorage.clear();
  };

  if (!token) {
    navigate("/");
  }
  return (
    <section>
      <h2>{`bienvenid@ ${user}`}</h2>
      <form className="RegisterSec">
        <fieldset>
          <button
            className="Done"
            onClick={() => {
              LogoutButton();
            }}
          >
            Logout
          </button>
        </fieldset>
      </form>
      <NewNews newNews={newNews} />
      <h1>Latest News</h1>

      <NewsList
        newss={news}
        removeNews={removeNews}
        addLike={addLike}
        addDislike={addDislike}
        removeLike={removeLike}
        removeDislike={removeDislike}
        addNewPhoto={addNewPhoto}
      />
    </section>
  );
};
