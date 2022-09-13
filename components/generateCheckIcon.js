const completeTask = e => {
  const element = e.target;
  superToggle( element, [ 'far', 'fas', 'completeIcon' ] );
}

const generateCheckIcon = () => {
  const check = document.createElement( 'I' );
  check.classList.add( 'far', 'fa-check-square', 'icon' );
  check.addEventListener( 'click', completeTask );
  return check;
}

export default generateCheckIcon;