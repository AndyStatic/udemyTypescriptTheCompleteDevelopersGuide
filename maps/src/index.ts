/*
To build the app and run the development server, simply run the following command in your terminal:
npx parcel index.html

Run npm install @faker-js/faker

Faker lib readMe - https://www.npmjs.com/package/@faker-js/faker

Markers on the map are clickable

Use maps key provided by the course due to billing

npm install @types/google.maps
*/
//console.log("Hi there!");

import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User();
//console.log(user);

const company = new Company();
//console.log(company);

const customMap = new CustomMap("map");

customMap.addMarker(user);
customMap.addMarker(company);
