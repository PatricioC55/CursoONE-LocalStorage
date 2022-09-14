import { superToggle } from './addTask.js';

const generateCheckIcon = ( id, complete ) => {
  const check = document.createElement( 'I' );

  complete 
  ? check.classList.add( 'fas', 'fa-check-square', 'completeIcon', 'icon' ) : check.classList.add( 'far', 'fa-check-square', 'icon' );;

  check.addEventListener( 'click', e => completeTask( e, id ) );
  return check;
}

const completeTask = ( e, id ) => {
  const element = e.target;
  superToggle( element, [ 'far', 'fas', 'completeIcon' ] );
  
  const taskList = JSON.parse(localStorage.getItem( 'tasks' )) || [];
  const i = taskList.findIndex( index => index.id == id );
  taskList[i]["complete"] = !taskList[i]["complete"];
  localStorage.setItem( 'tasks', JSON.stringify( taskList ) );
}

export default generateCheckIcon;