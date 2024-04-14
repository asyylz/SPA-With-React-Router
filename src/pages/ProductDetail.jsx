import { useParams, Link } from "react-router-dom";
// NOTES:
//if we set this to path, React Router will instead take a look at the currently active path and simply remove one segment from that path. If we set  it to route  it will remove all segments.
export default function ProductDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.productId}</p>
      <p>
      
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}
