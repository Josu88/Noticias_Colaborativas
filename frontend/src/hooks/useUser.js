import { useEffect, useState } from "react";
import { getNewByIdUserService } from "../services";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useUser = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const loadUser = async () => {
      try {
        setLoading(true);
        const user = await getNewByIdUserService(token);

        setNews(user);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [token]);

  const NewNews = (data) => {
    setNews([data, ...news]);
  };

  const removeNews = (id) => {
    setNews(news.filter((news) => news.id !== id));
  };

  const addLike = (id) => {
    const index = news.findIndex((newObject) => newObject.id === id);
    news[index].likes++;
    news[index].loggedUserLiked = true;
    if (news[index].loggedUserDisliked) {
      news[index].dislikes--;
      news[index].loggedUserDisliked = false;
    }
    setNews([...news]);
  };

  const addDislike = (id) => {
    const index = news.findIndex((newObject) => newObject.id === id);
    news[index].dislikes++;
    news[index].loggedUserDisliked = true;
    if (news[index].loggedUserLiked) {
      news[index].likes--;
      news[index].loggedUserLiked = false;
    }
    setNews([...news]);
  };

  const removeLike = (id) => {
    const index = news.findIndex((newObject) => newObject.id === id);
    news[index].likes--;
    news[index].loggedUserLiked = false;
    setNews([...news]);
  };

  const removeDislike = (id) => {
    const index = news.findIndex((newObject) => newObject.id === id);
    news[index].dislikes--;
    news[index].loggedUserDisliked = false;
    setNews([...news]);
  };

  const addNewPhoto = (id, newPhoto) => {
    const index = news.findIndex((newObject) => newObject.id === id);
    news[index].photo = newPhoto;
    setNews([...news]);
  };

  return {
    news,
    error,
    loading,
    NewNews,
    removeNews,
    addLike,
    addDislike,
    removeLike,
    removeDislike,
    addNewPhoto,
  };
};

export default useUser;
