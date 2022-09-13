const btn = document.querySelector( '[data-form-btn]' );

const newTask = e => {

  e.preventDefault();
  const input = document.querySelector( '[data-form-input]' );
  const cardList = document.querySelector( '[data-list]' );
  //cardList.appendChild( crearTarea( input.value ) );

  const contentCard = 
    `<div>
      <i class="far fa-check-square icon"></i>
      <span class="task">${input.value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`;

  const card = document.createElement( 'LI' );
  card.classList.add( 'card' );
  card.innerHTML = contentCard;

  cardList.appendChild( card );

  input.value = '';
} 

btn.addEventListener('click', newTask );

