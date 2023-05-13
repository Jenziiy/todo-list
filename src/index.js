import css from "./file.css";
import { createPage, View } from "./view";
import { Controller } from "./Controller";
import { TaskListModel } from "./Models/TaskListModel";

function component() {
   createPage();
}

export const app = new Controller(new TaskListModel(), new View());
 
component();
