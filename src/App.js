import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";
import Upload from "./pages/upload/Upload";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./app.scss";

const Layout=()=>{
  return(
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/upload",
        element:<Upload/>
      }
    ]
  },
  
])
function App() {
  return (
     <div>
      <RouterProvider router={router} />
     </div>
    );
}

export default App;
