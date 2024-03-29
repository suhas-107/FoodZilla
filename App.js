import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
// import Grocery from "./Components/Grocery";
import Footer from "./Components/Footer";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Error from "./Components/Error";
import About from "./Components/About";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
import Shimmer from "./Components/Shimmer";


/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// AppLayout component to render: Header, Body and Footer Component
const Grocery=lazy(()=>import("./Components/Grocery"));
const AppLayout = () => {
  return (
    
    <div>
      <Header/>
     
      <Outlet/>

      <Footer/>
      </div>

      

      
    
      
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [

      {
        path:"/restaurants/:resid",
        element:<RestaurantMenu/>

      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {

        path:"/",
        element:<Body/>
      },
      {

        path:"/grocery",

        element:<Suspense fallback={<h1>Loading...</h1>}>  <Grocery/>    </Suspense>
        

      }
     
      
    ],
    errorElement: <Error />,
  },
]);




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);


