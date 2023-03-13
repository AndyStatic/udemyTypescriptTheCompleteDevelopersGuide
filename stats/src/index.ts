//tsc --init in stats folder
//change "rootDir": "./src" in tsconfig.json
//change "outDir": "./build" in tsconfig.json
//tsc -w after
//npm init -y
//npm install nodemon concurrently
/*
Update package.json with
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start:build": "tsc -w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"
  },

  npm start

use football.csv

npm install @types/node
*/

//console.log("Hi there!");

import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv("football.csv");
const summary = Summary.winsAnalysisWithHtmlReport("Man United");

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
