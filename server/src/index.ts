//npm init -y
//tsc --init
//npm install concurrently
//npm install nodemon
//uncomment outdir and rootdir
/*
Update package.json with
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start:build": "tsc -w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"
  },

  npm start (may need restart)


npm install express body-parser cookie-session

npm install @types/express @types/cookie-session @types/body-parser

 * Enable "experimentalDecorators": true in tsconfig
 * Enable "emitDecoratorMetadata": true in tsconfig

npm install reflect-metadata
*/

//console.log("Hi there!");

import express, { Request, Response } from "express";
//import { router } from "./routes/loginRoutes";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import { AppRouter } from "./AppRouter";
import "./controllers/LoginController";
import "./controllers/RootController";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["laskdjf"] }));
//app.use(router);
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
