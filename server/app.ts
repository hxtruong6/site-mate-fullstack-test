// src/app.ts
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./src/routers";
import { initIssuesFile } from "./src/services/issueService";

const app = express();
const port = 3001;
app.use(cors());
app.use(bodyParser.json());
app.use(router);

// For React app
app.use(express.static("client/build"));

app.listen(port, () => {
  // Init database file
  initIssuesFile();

  console.log(`View the app at http://localhost:${port}`);
});
