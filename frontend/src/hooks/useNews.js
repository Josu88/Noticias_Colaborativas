import { useEffect, useState, useContext } from "react";
import { getAllNewsService } from "../services";
import { AuthContext } from "../context/AuthContext";

const useNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { token } = useContext(AuthContext);

  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true);
        const data = await getAllNewsService(token);

        setNews(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, [token]);

  const newNews = (data) => {
    setNews([data, ...news]);
  };

  const removeNews = async (id) => {
    try {
      setNews(news.filter((news) => news.id !== id));
    } catch (error) {
      setError(error.message);
    }
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
    newNews,
    removeNews,
    addLike,
    addDislike,
    removeLike,
    removeDislike,
    addNewPhoto,
  };
};

export default useNews;
