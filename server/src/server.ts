import express from "express";
import cors from "cors";
import path from "path";
import apiRouter from "./routes/api.routes";

import { PORT } from "./config";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", apiRouter);

if (process.env.BUN_ENV === "production") {
  const clientDistPath = path.join(__dirname, "..", "..", "client", "dist");

  app.use(express.static(clientDistPath));

  app.get("/*splat", (_, res) => {
    res.sendFile(path.join(clientDistPath, "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
