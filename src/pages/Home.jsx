// Link prevents the browser default of sending a HTTP request if the link is clicked.
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <p> Go to
      <Link to="/products">the list of products</Link> 
      </p>
    </>
  );
}
