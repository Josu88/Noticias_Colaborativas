import { NewsList } from "../components/NewsList";
import useNews from "../hooks/useNews";

export const HomePage = () => {
  const {
    news,
    removeNews,
    addLike,
    addDislike,
    removeLike,
    removeDislike,
    addNewPhoto,
  } = useNews();

  return (
    <section>
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
