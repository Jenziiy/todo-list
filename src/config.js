import view from "./view";

export const configuration = {
  
  priorityArray: [" ", "A - ASAP", "B - This week", "C - 4 fun"],
  projectCollection: ["Projects"],

  get priorities(){
    return this.priorityArray;
  },
  get project(){
    return this.projectCollection;
  },

  setProject(project){
    if(project != '' && this.projectCollection.find(element => element != project)){
    this.projectCollection.push(project);
        view.addSelectOptions([project])
    }
    return this.projectCollection;
  }

}

