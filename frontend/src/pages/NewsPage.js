import { useParams } from "react-router-dom";
import useNews from "../hooks/useNews";
import { News } from "../components/News";
import { ErrorMessage } from "../components/ErrorMessage";
import { Loading } from "../components/Loading";

export const NewsPage = () => {
  const { id } = useParams();
  const { news, error, loading, removeNews } = useNews(id);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1>news</h1>
      <News news={news} removeNews={removeNews(id)} />
    </section>
  );
};