//npm init -y
//npm install -g parcel-bundler
//parcel index.html
//npm install -g json-server
//in new terminal json-server -w db.json
//npm install axios

/*
Update package.json with
 "scripts": {
    "start:db": "json-server -w db.json",
    "startParcel": "parcel index.html"
  },



  npm startParcel
*/

//console.log("Hi there!");

import { UserList } from "./views/UserList";
import { Collection } from "./models/Collection";
import { UserProps, User } from "./models/User";

const users = new Collection(
  "http://localhost:3000/users",
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.on("change", () => {
  const root = document.getElementById("root");

  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();
