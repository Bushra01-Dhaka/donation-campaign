import { Outlet } from "react-router-dom";
import NavBar from "../Components/Header/NavBar";

const MainLayout = () => {
    return (
      <div className="bg-white shadow-lg">

        <div className="shadow-lg">
        <NavBar></NavBar>
        </div>

        <div className="min-h-screen">
            <Outlet></Outlet>
        </div>

      </div>
    );
};

export default MainLayout;