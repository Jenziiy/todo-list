import { addProjectLogic } from "./util";

export class Controller {

  constructor(model, view){
    this.model = model;
    this.view = view;
    console.log(model.projects)
    this.handleAddProject();
    addProjectLogic();
  } 

  getProjects(){
    return this.model.projects;
  }

  handleAddProject = (project) => {
    this.model.setProject(project);
    this.view.addSelectOptions([project])
  }

  addProjectLogic(){
    console.log('im running')
    this.handleAddProject()
    //do something to add proj
    addProjectLogic()
  };
}