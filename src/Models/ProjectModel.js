export class ProjectModel{
  projects = [];

  constructor(){
      
      // add itemlist to a project file
    }

  addProject(projectName){
    console.log('clicked')
   this.projects.push(projectName);
    return this.projects;
    }
}