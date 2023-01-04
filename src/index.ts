import express, { Express } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { routes } from "./routes";

dotenv.config();
const port = process.env.PORT;

const app: Express = express();
app.use(bodyParser.json());
app.use("/", routes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

// Export the Express API
export default app;
