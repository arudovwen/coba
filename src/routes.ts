import { type RouteConfig, index, route } from "@react-router/dev/routes";

const routes = [
  index("./pages/home/index.tsx"),
  route("auth/login", "./pages/auth/login.tsx"),
  route("auth/register", "./pages/auth/register.tsx"),
  route("auth/confirm-email", "./pages/auth/confirm-email.tsx"),
  route("auth/forgot-password", "./pages/auth/forgot-password.tsx"),
  route("auth/reset-password", "./pages/auth/password-reset.tsx"),
  route("auth/two-factor-setup", "./pages/auth/two-factor-authentication.tsx"),
  route("model", "./pages/model/index.tsx", [
    // index("./pages/model/chats.tsx"),
    route("chats", "./pages/model/chat/index.tsx", [
      // index("./pages/model/chat/explorer.tsx"),
      route("explorer", "./pages/model/chat/explorer.tsx"),
      route("analyzer", "./pages/model/chat/analyzer.tsx"),
      route("builder", "./pages/model/chat/builder.tsx"),
    ]),
    route("doc", "./pages/model/doc.tsx"),
    route("data", "./pages/model/data.tsx"),
  ]),
  route("*?", "catchall.tsx"),
] satisfies RouteConfig;

export default routes;
