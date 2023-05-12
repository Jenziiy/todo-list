import css from "./file.css";
import { createPage } from "./view";
import { Model } from "./Models/TaskListModel";
import { View } from "./view";
import { Controller } from "./Controller";

function component() {
   createPage();
}

const app = new Controller(new Model(), new View());
 
component();
app();