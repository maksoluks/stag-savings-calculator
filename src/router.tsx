import { QueryClient } from "@tanstack/react-query";
import { createRouter, createHashHistory } from "@tanstack/react-router"; // Dodaliśmy createHashHistory
import { routeTree } from "./routeTree.gen";

// Tworzymy historię opartą o hash, idealną dla GitHub Pages
const hashHistory = createHashHistory();

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    history: hashHistory, // Wpinamy hashHistory zamiast domyślnego browserHistory
  });

  return router;
};
