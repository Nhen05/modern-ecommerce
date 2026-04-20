import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
const MainLayout = ()=>{
    return(
        <div className=" flex min-h-screen  flex-col  bg-white ">
            <Header/>
            <div className="flex-grow">
             <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}
export  default MainLayout