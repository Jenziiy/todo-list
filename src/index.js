import css from "./file.css";
import { View } from "./view";
import { Controller } from "./Controller";
import itemListModel from "./Models/TaskListModel";


function component() {
   createPage();
}

export const app = new Controller(itemListModel, View);
 
component();
