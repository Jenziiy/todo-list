import app from "./Controller";
import css from "./file.css";
import model from "./Models/ObjectModel";
import view from "./view";

app;
view.bindAddProject(app.handleAddProject);
model.bindProjectListChanged(app.onProjectAdded);