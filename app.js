const btn = document.querySelector( '[data-form-btn]' );

const newTask = e => {
  e.preventDefault();

  const input = document.querySelector( '[data-form-input]' );
  const cardList = document.querySelector( '[data-ul-card]' );
  cardList.appendChild( crearTarea( input.value ) );
} 

btn.addEventListener('click', newTask );

/**
 * 
          <li class="card">
            <div>
              <i class="far fa-check-square icon"></i>
              <span class="task">Hacer curso de DOM</span>
            </div>
            <i class="fas fa-trash-alt trashIcon icon"></i>
          </li>
 */

function crearTarea( title = '' ) {
  const card = document.createElement( 'LI' );
  card.classList.add( 'card' );

  const trashIcon = document.createElement( 'I' );
  trashIcon.classList.add( 
    'fas',
    'fa-trash-alt',
    'trashIcon',
    'icon'
  );

  const checkIcon = document.createElement( 'I' );
  checkIcon.classList.add( 
    'far',
    'fa-check-square',
    'icon'
  );

  const spanContent = document.createElement( 'SPAN' );
  spanContent.classList.add( 'task' );
  spanContent.textContent = title;

  const div = document.createElement( 'DIV' );
  div.appendChild( checkIcon );
  div.appendChild( spanContent );

  card.appendChild( div );
  card.appendChild( trashIcon );

  return card;
}