import css from "./file.css";
import { createPage } from "./view";
import { Model } from "./Model";
import { View } from "./view";
import { Controller } from "./Controller";

function component() {
   createPage();
}

const app = new Controller(new Model(), new View());
 
component();
app();