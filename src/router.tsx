import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    // Ta linijka mówi routerowi: "Ignoruj /auto-gaz-stag i traktuj to jako /"
    basepath: '/auto-gaz-stag', 
  });

  return router;
};
