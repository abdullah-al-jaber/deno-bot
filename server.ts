import express from "express";
import cors from "cors";

import config from "./config";

const app = express();
app.use(cors());

const manifest = {};

app.listen({ hostname: config.hostname, port: config.port }, () => {
    console.log(`[DenoBot Manifest URL] ( http://${config.hostname}:${config.port}/manifest.json )`);
});
