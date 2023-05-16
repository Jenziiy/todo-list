import { buttonLogic, el } from "./util";
import { configuration } from "./config";

class View {

    constructor(){};

    date = new Date().toLocaleDateString('en-CA');

    htmlPageStructure = {
      header: document.createElement('header'),
      main:  document.createElement('main'),
      footer: document.createElement('footer'),
    };

    createPage(){
      this.createPageStructure();
      el('main-wrapper').appendChild(createForm());
      buttonLogic();
      this.createItemContainer();
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
    // let form = document.createElement('form');
      // form.setAttribute("method","post");
    // form.setAttribute("action", "submit");
    let form = document.createElement('div');
    form.id = 'add-task';
    let containerInputFields = document.createElement('div');
    containerInputFields.id = 'form-inputfields';
    let containerSelectFields = document.createElement('div');
    containerSelectFields.id = 'form-selectfields';
    let containerButtons = document.createElement('div');
    containerButtons.id = 'form-configfields';

    let button = document.createElement('button');
    button.id = 'add-task-button';
    button.innerText = 'add task';
    
    containerInputFields.appendChild(createFormInput('Task: ', 'What you gonna do?', 'task'));
    containerInputFields.appendChild(createFormInput('Description: ', 'pLz eLaBoRaTe?', 'description'));
    containerSelectFields.appendChild(createFormDate('Due date: ','date'));
    containerSelectFields.appendChild(createSelectOptions('input-dropdown', 'input','Priority: ', 'priority', configuration.priorities, 'inputdiv'));
    containerButtons.appendChild(createSelectOptions('project-dropdown', 'input','Project: ', 'project', configuration.projects, 'projectdiv'));
    containerButtons.appendChild(button);


    form.appendChild(containerInputFields);
    form.appendChild(containerSelectFields);
    form.appendChild(containerButtons);
    return form;
  };

    createFieldWrapper(id, className, label, field){
    let div = document.createElement('div');
    div.id = id;
    div.className = className;
    div.appendChild(label);
    div.appendChild(field);
    return div;
  }

    createFormInput(labelName, placeholder, name){
    
    let label = document.createElement('label');
    label.for = name;
    label.innerText = labelName;
    let input = document.createElement('input');
    input.className = 'input';
    input.name = name;
    input.type = 'text';
    input.setAttribute(`placeholder`, placeholder);
    return createFieldWrapper(name, 'inputdiv', label, input);
  }

    createFormDate(labelName, name){
    let label = document.createElement('label');
    label.for = name;
    label.innerText = labelName;
    let input = document.createElement('input');
    input.name = name;
    input.className = 'input';
    input.type = 'date';
    input.setAttribute(`value`, date);
    return createFieldWrapper(name, 'inputdiv', label, input);

  }

    createSelectOptions(id, className, labelName, name, options, wrapperFieldName){
    let label = document.createElement('label');
    let select = document.createElement('select');
    select.name = name;
    select.id = id;
    select.className = className;
    label.for = name;
    label.innerText = labelName;
    const values = options;
    for (const val of values) {
      let option = document.createElement('option');
      option.value = val;
      option.text = val.charAt(0).toUpperCase() + val.slice(1);
      select.appendChild(option); }
      return createFieldWrapper(name, wrapperFieldName, label, select);

  }

    createCheckbox(labelName, name){
    let label = document.createElement('label');
    label.for = name;
    label.innerText = labelName;
    let input = document.createElement('input');
    input.name = name;
    input.className = 'input';
    input.type = 'checkbox';
    input.setAttribute(`value`, 1);
    return createFieldWrapper(name, 'inputdiv', label, input);
  }

    createItemContainer(){
    const itemContainer = document.createElement('div');
    itemContainer.id = 'item-container';
    document.getElementsByTagName('main')[0].appendChild(itemContainer);
  }
  // add a new textbox so we can add a new proj

    buildItemView(item){
    const div = document.createElement('div');
    document.getElementById('item-container').appendChild(div);
    const paragraphBuilder = (item) => {
      for (const prop in item) {
        if (item.hasOwnProperty.call(item, prop)) {
          const itemValue = object[key];
          const paragraph =   document.createElement('p');
          paragraph.classList = 'todo-line';
          paragraph.innerText = itemValue;
        }
        div.appendChild(paragraph);
      }
    }
  }
}

export default new View();
