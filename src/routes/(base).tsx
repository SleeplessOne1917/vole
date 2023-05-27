import type { VoidComponent } from "solid-js";
import { Outlet } from "solid-start";

const Layout: VoidComponent = () => {
  return <Outlet />;
};

export default Layout;
