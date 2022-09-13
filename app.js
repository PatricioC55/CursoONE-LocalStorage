import generateCheckIcon from "./components/generateCheckIcon.js";
import generateTrashIcon from "./components/generateTrashIcon.js";

( ()=>{
  const btn = document.querySelector( '[data-form-btn]' );

  const addTask = e => {
    const cardList = document.querySelector( '[data-list]' );
    cardList.appendChild( newTask(e) );
  }

  const newTask = e => {
    e.preventDefault();

    const input = document.querySelector( '[data-form-input]' );
    const divList = document.createElement( 'DIV' );
    divList.appendChild( generateCheckIcon() );
    divList.appendChild( generateSpanTask( input.value ) );

    const card = document.createElement( 'LI' );
    card.classList.add( 'card' );
    card.appendChild( divList );
    card.appendChild( dateProcess() );
    card.appendChild( generateTrashIcon() );
  
    input.value = '';

    return card;
  } 

  btn.addEventListener('click', addTask );

  const generateSpanTask = ( textContent = '') => {
    const spanTask = document.createElement( 'SPAN' );
    spanTask.classList.add( 'task' );
    spanTask.textContent = textContent;
    return spanTask;
  }

  const dateProcess = () => {
    const inputDate = document.querySelector( '[data-form-date]' );
    const dateText = moment( inputDate.value ).format( 'DD/MM/YYYY' );
    const spanDate = document.createElement( 'SPAN' );
    spanDate.textContent = dateText;
    return spanDate;
  }

  function superToggle( object, classes = [] ){
    if ( Array.isArray( classes ) ) {

      classes.forEach( classItem => {
        object.classList.toggle( classItem );
      });

    } else {
      console.error("Invalid parameters");
    }
  }

} )();