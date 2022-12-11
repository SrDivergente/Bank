import App from "./app";
import * as dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;

new App().server.listen(PORT, () => {
  console.log(`[HTTP] Open Server in http://localhost:${PORT}`);
});
