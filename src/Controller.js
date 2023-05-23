import model from "./Models/ObjectModel";
import view from "./view";
import { addProjectLogic } from "./util";

class Controller {

  constructor(model, view){
    this.model = model;
    this.view = view;
    console.log(model.projects)
    this.handleAddProject();
    addProjectLogic();
    view.createPage();
  } 

  getProjects(){
    return this.model.projects;
  }

  handleAddProject = (project) => {
    if(project){
    this.model.setProject(project);
    this.view.addSelectOptions([project])
    }
  }

  addProjectLogic(){
    console.log('im running')
    this.handleAddProject()
    //do something to add proj
   // addProjectLogic()
  };

  onProjectAdded = (projects) => { 
    this.view.addProjectLogic();
}
    
}

export default new Controller(model, view);

view.bindAddProject(view.handleAddProject)