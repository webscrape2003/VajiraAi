const EMPTY_DATA = {
  "/api/v1/skills": [],
  "/api/v1/plugins": [],
  "/api/v1/users/git-identities": [],
  "/api/v1/users/projects": { projects: [], page: null },
  "/api/v1/users/tasks": { tasks: [], page_info: null },
  "/api/v1/users/models": { models: [] },
  "/api/v1/users/images": { images: [] },
  "/api/v1/users/wallet": {
    balance: 0,
    daily_token_balance: 0,
    daily_token_limit: 0,
  },
  "/api/v1/users/status": null,
  "/api/v1/server/config": {
    edition: "online",
    captcha_enabled: false,
  },
};

export default function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  const method = String(req.method || "GET").toUpperCase();
  const path = new URL(req.url || "/", "http://localhost").pathname.replace(
    /\/+$/,
    "",
  );

  if (method === "GET" || method === "HEAD") {
    const data = Object.prototype.hasOwnProperty.call(EMPTY_DATA, path)
      ? EMPTY_DATA[path]
      : null;

    res.status(200).json({ code: 0, message: "", data });
    return;
  }

  res.status(200).json({
    code: 1,
    message:
      "This Vercel deployment only serves the UI. Start the MonkeyCode API server to use this action.",
    data: null,
  });
}
