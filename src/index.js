import css from "./file.css";

function component() {
  const div = document.createElement('div');
  div.innerHTML = 'hello im an entry to this app'
  div.id = 'mainComponent';
  document.body.appendChild(div);
}