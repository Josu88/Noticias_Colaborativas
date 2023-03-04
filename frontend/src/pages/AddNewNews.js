import "../App.css";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { sendNewsService } from "../services";

export const AddNewNews = () => {
  const { token } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const data = new FormData(e.target);
      await sendNewsService({ data, token });

      e.target.reset();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section>
      <h1 className="titleAddNew">Add new news</h1>
      <form className="FormAddNews" onSubmit={handleForm}>
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
    </section>
  );
};
