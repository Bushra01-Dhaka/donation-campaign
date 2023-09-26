import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../Components/Header/NavBar";
import Spinner from "../Components/Spinner/Spinner";

const MainLayout = () => {
  const navigation = useNavigation();
  const isLoadingProducts = navigation.state === "loading";

  return (
    <div className="bg-white">

      <div className="shadow-lg">
        <NavBar></NavBar>
      </div>

      {
        isLoadingProducts? <Spinner></Spinner> :  <div className="min-h-screen ">
        <Outlet></Outlet>
      </div> 
      }

{/* 
      <div className="min-h-screen ">
        <Outlet></Outlet>
      </div> */}





    </div>
  );
};

export default MainLayout;