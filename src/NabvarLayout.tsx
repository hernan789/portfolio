import { Outlet } from "react-router-dom";
import Nabvar from "./components/Nabvar";

function NavbarLayout() {
  return (
    <>
      <Nabvar />
      <Outlet />
    </>
  );
}

export default NavbarLayout;
