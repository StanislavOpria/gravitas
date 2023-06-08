import Articles from "../../Articles/Articles";
import Main from "../../Main/Main";

export const routeList = [
  {
    path: "/articles",
    Component: Articles,
  },
  {
    path: "/",
    Component: Main,
  },
];
