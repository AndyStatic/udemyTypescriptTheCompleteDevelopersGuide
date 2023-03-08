//tsc --init in sort folder
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
    "start": "concurrently npm:start*"
  },

  npm start
*/

//console.log("Hi there!");

import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// const numbersCollection = new NumbersCollection([50, 3, -5, 0]);
// numbersCollection.sort();
// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection('Xaayb');
// charactersCollection.sort();
// console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();
