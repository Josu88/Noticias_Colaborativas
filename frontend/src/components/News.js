import "../App.css";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useRef } from "react";
import { deleteNewsService, disLikeService } from "../services";
import { likeService } from "../services";
import { addPhotoService } from "../services";
import { AuthContext } from "../context/AuthContext";

export const News = ({
  news,
  addLike,
  addDislike,
  removeLike,
  removeDislike,
  addNewPhoto,
  removeNews,
}) => {
  const { token, idUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [photo, setPhoto] = useState(null);
  const navigate = useNavigate();

  const photoInputRef = useRef();

  const deleteNews = async (id) => {
    try {
      await deleteNewsService({ id, token });

      if (removeNews) {
        removeNews(id);
      } else {
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const addPhoto = async (id) => {
    try {
      const data = new FormData();
      data.set("photo", photo);

      const { photo: newPhoto } = await addPhotoService({ id, data, token });
      setPhoto(null);
      photoInputRef.current.value = "";
      addNewPhoto(id, newPhoto);
    } catch (error) {
      setError(error.message);
    }
  };

  const like = async (id) => {
    try {
      const { liked } = await likeService({ id, token });
      if (liked) {
        addLike(id);
        return;
      }
      removeLike(id);
    } catch (error) {
      setError(error.message);
    }
  };

  const disLike = async (id) => {
    try {
      const { unliked } = await disLikeService({ id, token });

      if (unliked) {
        addDislike(id);
        return;
      }
      removeDislike(id);
    } catch (error) {
      setError(error.message);
    }
  };

  let id = Number(idUser);

  return (
    <ul className="news-list">
      <li>
        <article className="news" id={news.id}>
          <section className="photoNew">
            {news.photo ? (
              <img
                src={`${process.env.REACT_APP_BACKEND}/photos/${news.photo}`}
                alt={news.photo}
              />
            ) : (
              "No hay foto"
            )}
          </section>
          <p>Title: {news.title}</p>
          <p>leadIn: {news.leadIn}</p>
          <p>Text: {news.text}</p>
          <p>Theme: {news.theme}</p>
          <p>User: {news.idUser}</p>
          <p>Likes: {news.likes}</p>
          <p>unLikes: {news.dislikes}</p>

          {token && news.idUser === id ? (
            <section className="photoBar">
              <label htmlFor="photo">añadir photo</label>
              <input
                type="file"
                name="photo"
                id="photo"
                ref={photoInputRef}
                accept={"photo/*"}
                onChange={(e) => setPhoto(e.target.files[0])}
              />{" "}
              <button
                className="photoButton"
                onClick={() => {
                  if (window.confirm("Are you sure?")) addPhoto(news.id);
                }}
              >
                upload
              </button>
              {photo ? (
                <figure>
                  <img
                    src={URL.createObjectURL(photo)}
                    style={{ width: "100px" }}
                    alt="Preview"
                  />
                </figure>
              ) : null}
            </section>
          ) : null}

          <span>
            {token && news.idUser !== id ? (
              <span>
                <button
                  className={news.loggedUserLiked ? "liked" : ""}
                  onClick={() => {
                    like(news.id);
                  }}
                >
                  👍
                </button>
                <button
                  className={news.loggedUserDisliked ? "disliked" : ""}
                  onClick={() => {
                    disLike(news.id);
                  }}
                >
                  👎
                </button>
              </span>
            ) : null}
            {token && news.idUser === id ? (
              <button
                className="DelButton"
                onClick={() => {
                  if (window.confirm("Are you sure?")) deleteNews(news.id);
                }}
              >
                Delete news
              </button>
            ) : null}
          </span>
          {error ? <p className="MenError">{error}</p> : null}
        </article>
      </li>
    </ul>
  );
};
