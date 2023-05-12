import css from "./file.css";
import { createPage } from "./view";

function component() {
   createPage();
}

const app = new Controller(new Model(), new View());
 
component();
