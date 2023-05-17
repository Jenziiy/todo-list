import css from "./file.css";
import View  from "./view";
import { Controller } from "./Controller";
import Model from "./Models/ObjectModel";


export const app = new Controller(Model, View);
 
View.createPage();
