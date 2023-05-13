export class Controller {

  constructor(model, view){
    this.model = model;
    this.view = view;
  model.addItem({title: 'hoi dit is een titel', description: 'heya ik ben een omschrijving', dueDate: '10-01-1992', project: 'geen'})
 model.updateItem(1, {title: 'hello'});
} }