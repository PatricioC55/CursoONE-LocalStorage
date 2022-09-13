import { newTask } from './addTask.js';

export const readTasks = () => {
  const taskList = JSON.parse(localStorage.getItem( 'tasks' )) || [];

  taskList.forEach( task => {
    const cardList = document.querySelector( '[data-list]' );
    cardList.appendChild( newTask( task ) );
  });
}