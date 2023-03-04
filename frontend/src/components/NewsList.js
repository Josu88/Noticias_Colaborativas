import { News } from "./News";

export const NewsList = ({
  newss,
  addLike,
  addDislike,
  removeLike,
  removeDislike,
  addNewPhoto,
  removeNews,
}) => {
  return newss.length ? (
    <ul className="news-list">
      {newss.map((news) => {
        return (
          <li key={news.id}>
            <News
              news={news}
              addLike={addLike}
              addDislike={addDislike}
              removeLike={removeLike}
              removeDislike={removeDislike}
              addNewPhoto={addNewPhoto}
              removeNews={removeNews}
            />
          </li>
        );
      })}
    </ul>
  ) : (
    <p>There are no news...</p>
  );
};
