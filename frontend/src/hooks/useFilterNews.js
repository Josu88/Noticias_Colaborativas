import { useEffect, useState, useContext } from "react";
import { getFilterThemeNewsService } from "../services";
import { AuthContext } from "../context/AuthContext";

const useFilterNews = (theme) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { token } = useContext(AuthContext);

  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true);
        const data = await getFilterThemeNewsService(theme, token);

        setNews(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, [theme, token]);

  const addNews = (data) => {
    setNews([data, ...news]);
  };

  return { news, error, loading, addNews };
};

export default useFilterNews;
