import { Outlet } from "react-router-dom";
import Header from "../components/Header";
const MainLayout = () => (
  <>
    <div>
      <Header />

      <Outlet />
    </div>
  </>
);

export default MainLayout;
