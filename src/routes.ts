import { type RouteConfig, index, route } from "@react-router/dev/routes";

const routes = [
  index("./routes/home/index.tsx"),
  route("auth/login", "./routes/auth/login.tsx"),
  route("auth/register", "./routes/auth/register.tsx"),
  route("auth/confirm-email", "./routes/auth/confirm-email.tsx"),
  route("auth/forgot-password", "./routes/auth/forgot-password.tsx"),
  route("auth/reset-password", "./routes/auth/password-reset.tsx"),
  route("auth/two-factor-setup", "./routes/auth/two-factor-authentication.tsx"),
  route("model", "./routes/model/index.tsx", [
    // index("./routes/model/chats.tsx"),
    route("chats", "./routes/model/chat/index.tsx", [
      // index("./routes/model/chat/explorer.tsx"),
      route("explorer", "./routes/model/chat/explorer.tsx"),
      route("analyzer", "./routes/model/chat/analyzer.tsx"),
      route("builder", "./routes/model/chat/builder.tsx"),
    ]),
    route("doc", "./routes/model/doc.tsx"),
    route("data", "./routes/model/data.tsx"),
  ]),
  route("*?", "catchall.tsx"),
] satisfies RouteConfig;

export default routes;
