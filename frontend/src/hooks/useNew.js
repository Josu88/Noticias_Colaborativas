import { useEffect, useState } from "react";
import { getSingleNewsService } from "../services";

const useNew = (id) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true);
        const data = await getSingleNewsService(id);

        setNews(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, [id]);

  const NewNews = (data) => {
    setNews([data, ...news]);
  };

  return { news, error, loading, NewNews };
};

export default useNew;
