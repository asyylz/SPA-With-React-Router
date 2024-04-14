// Link prevents the browser default of sending a HTTP request if the link is clicked.
import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/products");
  }
  return (
    <>
      <h1>Home Page</h1>
      <p>
        {" "}
        Go to
        <Link to="products">the list of products</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}
