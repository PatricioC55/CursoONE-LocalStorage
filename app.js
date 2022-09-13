import generateCheckIcon from "./components/generateCheckIcon.js";
import generateTrashIcon from "./components/generateTrashIcon.js";

( ()=>{
  const btn = document.querySelector( '[data-form-btn]' );

  const newTask = e => {
    e.preventDefault();
    const input = document.querySelector( '[data-form-input]' );
    const cardList = document.querySelector( '[data-list]' );
    const divList = document.createElement( 'DIV' );

    divList.appendChild( generateCheckIcon() );
    divList.appendChild( generateSpanTask( input.value ) );

    const card = document.createElement( 'LI' );
    card.classList.add( 'card' );
    card.appendChild( divList );
    card.appendChild( generateTrashIcon() );
    cardList.appendChild( card );

    input.value = '';
  } 

  btn.addEventListener('click', newTask );

  const generateSpanTask = ( textContent = '') => {
    const spanTask = document.createElement( 'SPAN' );
    spanTask.classList.add( 'task' );
    spanTask.textContent = textContent;
    return spanTask;
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