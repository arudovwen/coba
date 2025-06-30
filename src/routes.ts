import { type RouteConfig, index, route } from "@react-router/dev/routes";

const routes = [
  index("./routes/home/index.tsx"),
  route("auth/login", "./routes/auth/login.tsx"),
  route("auth/register", "./routes/auth/register.tsx"),
  route("auth/confirm-email", "./routes/auth/confirm-email.tsx"),
  route("auth/forgot-password", "./routes/auth/forgot-password.tsx"),
  route("auth/reset-password", "./routes/auth/password-reset.tsx"),
  route("auth/two-factor-setup", "./routes/auth/two-factor-authentication.tsx"),
  route("", "./routes/page/index.tsx", [
    // index("./routes/page/chats.tsx"),
    route("chats", "./routes/page/chat/index.tsx", [
      // index("./routes/page/chat/explorer.tsx"),
      route("explorer", "./routes/page/chat/explorer.tsx"),
      route("analyzer", "./routes/page/chat/analyzer.tsx"),
      route("builder", "./routes/page/chat/builder.tsx"),
    ]),
    route("doc", "./routes/page/doc.tsx"),
    route("data", "./routes/page/data.tsx"),
      route("model", "./routes/page/model/index.tsx"),
  ]),
  route("*?", "catchall.tsx"),
] satisfies RouteConfig;

export default routes;
