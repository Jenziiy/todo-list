import { configuration } from "./config";
import model from "./Models/ObjectModel";
import { buttonLogic, el, addProjectLogic} from "./util";

class View {
  date = new Date().toLocaleDateString('en-CA');

    constructor(){}


    htmlPageStructure = {
      header: document.createElement('header'),
      nav: document.createElement('nav'),
      main:  document.createElement('main'),
      footer: document.createElement('footer'),
    }

    createPage(){
      this.createPageStructure();
      el('main-wrapper').appendChild(this.createForm());
      buttonLogic();
      this.addProjectButton();
      addProjectLogic();
      this.createItemContainer();
      this.createProjectInputField();
    }

    createPageStructure(){
    for ( const prop in this.htmlPageStructure ) {
      let element = this.htmlPageStructure[prop];
      element.classList.add('page-sections');
      document.body.appendChild(element);
      let childWrapper = document.createElement('div');
      childWrapper.setAttribute(`id`, `${prop}-wrapper`);
      element.appendChild(childWrapper);
    }
  }

    createForm(){
     let form = document.createElement('form');
      // form.setAttribute("method","post");
    // form.setAttribute("action", "submit");
    form.id = 'add-task';
    let containerInputFields = document.createElement('div');
    containerInputFields.id = 'form-inputfields';
    let containerSelectFields = document.createElement('div');
    containerSelectFields.id = 'form-selectfields';
    let containerButtons = document.createElement('div');
    containerButtons.id = 'form-configfields';

    let button = document.createElement('button');
    button.type = 'button';
    button.id = 'add-task-button';
    button.innerText = 'add task';
    
    containerInputFields.appendChild(this.createFormInput('Task: ', 'create new task', 'task', 'reset'));
    containerInputFields.appendChild(this.createFormInput('Description: ', 'add description', 'description', 'reset'));
    containerSelectFields.appendChild(this.createFormDate('Due date: ','date'));
    containerSelectFields.appendChild(this.createSelectOptions('input-dropdown', 'input','Priority: ', 'priority', configuration.priorities, 'inputdiv'));
    containerButtons.appendChild(this.createSelectOptions('project-dropdown', 'input','Project: ', 'project', model.projects, 'projectdiv'));
    containerButtons.appendChild(button);


    form.appendChild(containerInputFields);
    form.appendChild(containerSelectFields);
    form.appendChild(containerButtons);
    return form;
  }

    createFieldWrapper(id, className, label, field){
    let div = document.createElement('div');
    div.id = id;
    div.className = className;
    div.appendChild(label);
    div.appendChild(field);
    return div;
  }

    createFormInput(labelName, placeholder, name, resetClass){
    let label = document.createElement('label');
    label.for = name;
    label.innerText = labelName;
    let input = document.createElement('input');
    input.classList.add('input');
    console.log(input.classList);
    input.classList.add(resetClass);
    input.name = name;
    input.type = 'text';
    input.setAttribute(`placeholder`, placeholder);
    return this.createFieldWrapper(name, 'inputdiv', label, input);
  }

    createFormDate(labelName, name){
    let label = document.createElement('label');
    label.for = name;
    label.innerText = labelName;
    let input = document.createElement('input');
    input.name = name;
    input.className = 'input';
    input.type = 'date';
    input.setAttribute(`value`, this.date);
    return this.createFieldWrapper(name, 'inputdiv', label, input);

  }

    createSelectOptions(id, className, labelName, name, options, wrapperFieldName){
    let label = document.createElement('label');
    let select = document.createElement('select');
    select.name = name;
    select.id = id;
    select.className = className
    label.for = name;
    label.innerText = labelName;
    const values = options;
    for (const val of values) {
      let option = document.createElement('option');
      option.value = val;
      option.text = val?.charAt(0).toUpperCase() + val.slice(1);
      select.appendChild(option); 
    }
    return this.createFieldWrapper(name, wrapperFieldName, label, select);
  }

  addSelectOptions(values){
    let select = document.getElementById('project-dropdown');
    for (const val of values) {
      let option = document.createElement('option');
      option.value = val;
      option.text = val.charAt(0).toUpperCase() + val.slice(1);
      select.appendChild(option); 
    }
  }

    createCheckbox(labelName, name){
    let label = document.createElement('label');
    label.for = name;
    label.innerText = labelName;
    let input = document.createElement('input');
    input.name = name;
    input.className = 'todo-line';
    input.type = 'checkbox';
    input.setAttribute(`value`, 1);
    return this.createFieldWrapper(name, 'todo-line', label, input);
  }

    createItemContainer(){
    const itemContainer = document.createElement('div');
    itemContainer.id = 'item-container';
    document.getElementsByTagName('main')[0].appendChild(itemContainer);
  }
  // add a new textbox so we can add a new proj

    buildItemView(item){
    const div = document.createElement('div');
    div.id = 'todo-item';
    document.getElementById('item-container').appendChild(div);
    this.createParagraph(item, div);
    div.appendChild(this.createCheckbox('complete', 'complete'));
}

    createParagraph(item, div) {
    let itemObj = Object.assign({}, item);
    for (const prop in itemObj) {
      if (itemObj.hasOwnProperty.call(itemObj, prop)) {
        const itemValue = itemObj[prop];
        console.log(itemObj[prop])
        const paragraph =   document.createElement('p');
        paragraph.classList = 'todo-line';
        paragraph.innerText = itemValue;
        div.appendChild(paragraph);
      }
    }
    }

  addProjectButton(){
    let projectAddBtn = document.createElement('button');
    projectAddBtn.innerText = '+';
    projectAddBtn.id = 'project-button';
    projectAddBtn.type = 'button';
    document.getElementById('project').appendChild(projectAddBtn);
  }

  createProjectInputField(){
    let projectInput = document.createElement('input');
    projectInput.id = 'project-input';
    projectInput.placeholder = 'new project';
    document.getElementById('project').appendChild(projectInput);
  }

  bindAddProject(handler){
    const projectInputElement = document.getElementById('project-input');
    document.getElementById('project-button').addEventListener('click', () => {
    if ( projectInputElement.value ){
     handler(projectInputElement.value)
     projectInputElement.value = '';
    }
  })

  }

  addNewProjectView(projects){
    const projectNavigator = document.getElementsByTagName('nav')[0];
    projects.forEach(project => {
      const btn = document.createElement('button');
      btn.classList.add(project, 'projectlist-item');   
      btn.addEventListener('click', this.viewTasksPerProject);  
      projectNavigator.appendChild(btn);
    });
    const projectContainer = document.createElement('div');
    //create method to render a tab(button) per page/view, 
    //which we can expand via click in order to show the selection of todo lists
    // assign by class of item ? 
  }

  viewTasksPerProject(){
    const projectItemCollection = Array.from(document.getElementsByClassName('projectlist-item')) 
  };
  }


export default new View();
