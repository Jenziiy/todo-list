import css from "./file.css";
import { createPage } from "./view";
import { View } from "./view";
import { Controller } from "./Controller";
import { Model } from "./Models/taskListModel";

function component() {
   createPage();
}

const app = new Controller(new Model(), new View());
 
component();
app();