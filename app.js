import { addTask } from './components/addTask.js';
import { readTasks } from './components/readTasks.js';
import { uniqueDates } from './services/date.js'

( () => {
  readTasks();

  const btn = document.querySelector( '[data-form-btn]' );
  btn.addEventListener('click', addTask );

} )();