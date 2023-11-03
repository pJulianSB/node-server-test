console.log("Hello dev");
import { createServer } from "http";

const httpServer = createServer((req, res) => {
  console.log("Request received");
  res.end("Response from server");
});

httpServer.listen(3000);
