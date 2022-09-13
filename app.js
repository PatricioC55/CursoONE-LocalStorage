( ()=>{
  const btn = document.querySelector( '[data-form-btn]' );

  const newTask = e => {

    e.preventDefault();
    const input = document.querySelector( '[data-form-input]' );
    const cardList = document.querySelector( '[data-list]' );
    const divList = document.createElement( 'DIV' );

    divList.appendChild( generateCheck() );
    divList.appendChild( generateSpanTask( input.value ) );

    const card = document.createElement( 'LI' );
    card.classList.add( 'card' );
    card.appendChild( divList );
    card.appendChild( generateTrashIcon() );
    //card.innerHTML += contentCard;

    cardList.appendChild( card );

    input.value = '';
  } 

  btn.addEventListener('click', newTask );

  const completeTask = e => {
    const element = e.target;
    superToggle( element, [ 'far', 'fas', 'completeIcon' ] );
    //element.classList.toggle('far' );
    //element.classList.toggle('fas');
    //element.classList.toggle('completeIcon');
  }

  const deleteTask = e => {
    const element = e.target;
    //const beforeElement = element.parentElement();
    
  }

  const generateCheck = () => {
    //<i class="far fa-check-square icon"></i>
    const check = document.createElement( 'I' );
    check.classList.add( 'far', 'fa-check-square', 'icon' );
    check.addEventListener( 'click', completeTask );
    return check;
  }

  const generateSpanTask = ( textContent = '') => {
    //<span class="task">${input.value}</span>
    const spanTask = document.createElement( 'SPAN' );
    spanTask.classList.add( 'task' );
    spanTask.textContent = textContent;
    return spanTask;
  }

  const generateTrashIcon = () => {
    //<i class="fas fa-trash-alt trashIcon icon"></i>
    const trasIcon = document.createElement( 'I' );
    trasIcon.classList.add( 'fas', 'fa-trash-alt', 'trashIcon', 'icon' );
    trasIcon.addEventListener( 'click', deleteTask );
    return trasIcon;
  }

  function superToggle( object, classes = [] ){
    if ( classes.isArray() ) {

      classes.forEach( classItem => {
        object.classList.toggle( classItem );
      });

    } else {
      console.error("Invalid parameters");
    }
  }

} )();