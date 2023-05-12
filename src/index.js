import css from "./file.css";
import { createPage } from "./view";
import { View } from "./view";
import { Controller } from "./Controller";
import { Model, TaskListModel } from "./Models/TaskListModel";

function component() {
   createPage();
}

const app = new Controller(new Model(), new View());
 
component();

const tasklist = new TaskListModel();

tasklist.addItem({title: 'hoi dit is een titel', description: 'heya ik ben een omschrijving', dueDate: '10-01-1992', project: 'geen'});
console.log(tasklist);
tasklist.updateItem({id: 1,title: 'title'});
console.log(tasklist);