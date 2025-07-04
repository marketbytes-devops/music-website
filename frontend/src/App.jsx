import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/events",
        element: <Events />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/gallery",
        element: <Gallery />
      },
      {
        path: "/contact-us",
        element: <ContactUs />
      },
    ]
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
