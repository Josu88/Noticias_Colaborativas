import "../App.css";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { sendNewsService } from "../services";

export const NewNews = ({ newNews }) => {
  const { token } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const data = new FormData(e.target);
      const response = await sendNewsService({ data, token });

      newNews(response);

      e.target.reset();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <h1>Add new news</h1>
      <form className="new-news" onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="title">titulo</label>
          <input type="text" name="title" id="title" required />
        </fieldset>

        <fieldset>
          <label htmlFor="leadIn">leadIn</label>
          <input type="text" name="leadIn" id="leadIn" required />
        </fieldset>

        <fieldset>
          <label htmlFor="text">Text</label>
          <input type="text" name="text" id="text" required />
        </fieldset>

        <fieldset>
          <label htmlFor="theme">tema</label>
          <input type="text" name="theme" id="theme" required />
        </fieldset>

        <button className="Done">Send news</button>
        {error ? <p>{error}</p> : null}
        {loading ? <p>posting news...</p> : null}
      </form>
    </>
  );
};
