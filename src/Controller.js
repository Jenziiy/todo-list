export class Controller {

  constructor(model, view){
    this.model = model;
    this.view = view;
    console.log(model.projects)
  } 

  getProjects(){
    return this.model.projects;
  }

}