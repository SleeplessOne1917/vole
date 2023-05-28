import type { VoidComponent } from "solid-js";
import { Outlet } from "solid-start";
import Headbar from "~/components/Headbar";

const Layout: VoidComponent = () => {
  return (
    <>
      <Headbar />
      <Outlet />
    </>
  );
};

export default Layout;
