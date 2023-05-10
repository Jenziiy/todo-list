export const configuration = {
  
  priorityArray: ["Priority", "A - ASAP", "B - This week", "C - 4 fun"],
  projectCollection: ["Projects"],

  get priorities(){
    return this.priorityArray;
  },
  get projects(){
    return this.projectCollection;
  },

  set project(project){
    this.projectCollection.push(project);
  }

}

