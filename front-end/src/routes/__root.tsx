import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import LayoutCustom from "../layout/LayoutCustom";

export const Route = createRootRoute({
  component: () => (
    <>
      <LayoutCustom>
        <Outlet />
      </LayoutCustom>

      <TanStackRouterDevtools />
    </>
  ),
});
