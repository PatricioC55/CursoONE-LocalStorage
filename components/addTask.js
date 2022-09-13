import generateCheckIcon from "./generateCheckIcon.js";
import generateTrashIcon from "./generateTrashIcon.js";

export function superToggle( object, classes = [] ){
  if ( Array.isArray( classes ) ) {

    classes.forEach( classItem => {
      object.classList.toggle( classItem );
    });

  } else {
    console.error("Invalid parameters");
  }
}

export const addTask = e => {
  e.preventDefault();

  const input = document.querySelector( '[data-form-input]' );
  const inputDate = document.querySelector( '[data-form-date]' );

  const inputValue = input.value;
  const dateText = moment( inputDate.value ).format( 'DD/MM/YYYY' ); 

  const data = {
    inputValue,
    dateText
  }

  const taskList = JSON.parse(localStorage.getItem( 'tasks' )) || [];
  taskList.push( data );
  localStorage.setItem( 'tasks', JSON.stringify( taskList ) );

  const cardList = document.querySelector( '[data-list]' );
  cardList.appendChild( newTask( data ) );

  input.value = '';
  inputDate.value = '';
}

export const newTask = ( { inputValue, dateText } ) => {

  const divList = document.createElement( 'DIV' );
  divList.appendChild( generateCheckIcon() );
  divList.appendChild( generateSpanTask( inputValue ) );

  const card = document.createElement( 'LI' );
  card.classList.add( 'card' );
  card.appendChild( divList );
  card.appendChild( dateProcess( dateText ) );
  card.appendChild( generateTrashIcon() );
    
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