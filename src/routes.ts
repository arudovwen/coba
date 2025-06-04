import {
    type RouteConfig,
    index,
    route,
  } from "@react-router/dev/routes";
  
  export default [
    index("./pages/home/index.tsx"),
    route("*?", "catchall.tsx"),
  ] satisfies RouteConfig;
  