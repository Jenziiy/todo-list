import view from "../view";

export class ProjectModel{
  projects = ['default'];
  constructor(){
    
    }

    get project(){
      return this.projects;
    }
  
    setProject(project){
      if(project != '' && this.projects.find(element => element != project)){
      this.projects.push(project);
          view.addSelectOptions([project])
      }
      return this.projects;
    }
}