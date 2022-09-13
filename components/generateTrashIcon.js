const deleteTask = e => {
  const element = e.target;
  element.parentNode.remove();
}

const generateTrashIcon = () => {
  const trasIcon = document.createElement( 'I' );
  trasIcon.classList.add( 'fas', 'fa-trash-alt', 'trashIcon', 'icon' );
  trasIcon.addEventListener( 'click', deleteTask );
  return trasIcon;
}

export default generateTrashIcon;