import { newTask } from './addTask.js';
import dateSectionElement from "./dateSectionElement.js";
import { uniqueDates } from "../services/date.js";

export const readTasks = () => {
  const cardList = document.querySelector( '[data-list]' );
  const taskList = JSON.parse(localStorage.getItem( 'tasks' )) || [];
  const dates = uniqueDates( taskList );

  dates.forEach( date => {
    cardList.appendChild( dateSectionElement( date ) );
    const dateFormat = moment( date, 'DD/MM/YYYY' );

    taskList.forEach( task => {
      const taskDateFormat = moment( task.dateText, 'DD/MM/YYYY' );
      if ( dateFormat.diff( taskDateFormat ) == 0 ) {
        cardList.appendChild( newTask( task ) );
      }

    });
  });
}