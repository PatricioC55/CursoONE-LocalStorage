import { readTasks } from "./readTasks.js";

const generateTrashIcon = id => {
  const trasIcon = document.createElement( 'I' );
  trasIcon.classList.add( 'fas', 'fa-trash-alt', 'trashIcon', 'icon' );
  trasIcon.addEventListener( 'click', () => deleteTask( id ) );
  return trasIcon;
}

const deleteTask = id => {
  const cardList = document.querySelector( '[data-list]' );
  
  const taskList = JSON.parse(localStorage.getItem( 'tasks' )) || []
  const i = taskList.findIndex( index => index.id == id );

  taskList.splice( i, 1 );
  localStorage.setItem( 'tasks', JSON.stringify( taskList ) );

  cardList.innerHTML = '';
  readTasks();
}

export default generateTrashIcon;