import useNewss from "../hooks/useNews";
import { ErrorMessage } from "./ErrorMessage";
import { NewsList } from "./NewsList";

export const UserNewss = ({ id }) => {
  const { newss, loading, error, removeNews } = useNewss(id);

  if (loading) return <p>Loading newss...</p>;
  if (error) return <ErrorMessage message={error} />;

  return <NewsList newss={newss} removeNews={removeNews} />;
};
