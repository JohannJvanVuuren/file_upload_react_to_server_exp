// Dependency modules
import bodyParser from 'body-parser';
import cors from 'cors';
import crypto from 'crypto';
import express from 'express';
import helmet from 'helmet';
import path from 'path';

// Import of routes
import retrieveFileRoute from "./routes/retrieve_file.js";

// Creating a Express instance
const app = express();

// Setting up __dirname
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Mounting of middleware
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

// Mounting of routes
app.use('/api', retrieveFileRoute);

// Setup of the default Helmet settings for the app
const nonce = crypto.randomUUID();
helmet.contentSecurityPolicy({
  directives: {
    "script-src": [`'nonce-${nonce}'`, "strict-dynamic"],
    "object-src": "none",
    "base-uri": "none",
    "Cross-Origin-Resource-Policy": "cross-origin",
    "Cross-Origin-Opener-Policy": "cross-origin"
  }
})

// Setting the instance as the default export of the module
export default app;
