import generateCheckIcon from "./generateCheckIcon.js";
import generateTrashIcon from "./generateTrashIcon.js";

export const addTask = e => {
  const cardList = document.querySelector( '[data-list]' );
  cardList.appendChild( newTask(e) );
}

const newTask = e => {

  e.preventDefault();
  const taskList = JSON.parse( localStorage.getItem( 'tasks' ) ) || [];

  const input = document.querySelector( '[data-form-input]' );
  const inputValue = input.value;

  const divList = document.createElement( 'DIV' );
  divList.appendChild( generateCheckIcon() );
  divList.appendChild( generateSpanTask( inputValue ) );

  const inputDate = document.querySelector( '[data-form-date]' );
  const dateText = moment( inputDate.value ).format( 'DD/MM/YYYY' );

  const card = document.createElement( 'LI' );
  card.classList.add( 'card' );
  card.appendChild( divList );
  card.appendChild( dateProcess( dateText ) );
  card.appendChild( generateTrashIcon() );
    
  const data = {
    inputValue,
    dateText
  }
  taskList.push( data );

  localStorage.setItem( 'tasks', JSON.stringify( taskList ) );
  input.value = '';
  return card;
} 

const generateSpanTask = ( textContent = '') => {
  const spanTask = document.createElement( 'SPAN' );
  spanTask.classList.add( 'task' );
  spanTask.textContent = textContent;
  return spanTask;
}

const dateProcess = ( dateText = '' ) => {
  const spanDate = document.createElement( 'SPAN' );
  spanDate.textContent = dateText;
  return spanDate;
}

export function superToggle( object, classes = [] ){
  if ( Array.isArray( classes ) ) {

    classes.forEach( classItem => {
      object.classList.toggle( classItem );
    });

  } else {
    console.error("Invalid parameters");
  }
}