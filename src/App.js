import {
  createBrowserRouter,
  RouterProvider,
  //createRoutesFromElements,
  //Route,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorElement from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />,
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );

//const router = createBrowserRouter(routeDefinitions);

// If a path starts with a slash, it is an absolute path.
// If we removing a slash it turns into a relative path.

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorElement />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <ProductDetailPage /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
