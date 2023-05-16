import css from "./file.css";
import { createPage, View, buildItemView } from "./view";
import { Controller } from "./Controller";
import itemListModel from "./Models/TaskListModel";


function component() {
   createPage();
}

export const app = new Controller(itemListModel, new View());
 
component();
