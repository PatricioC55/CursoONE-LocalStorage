export default date => {
  const dateSection = document.createElement( 'LI' );
  dateSection.classList.add( 'date' );
  dateSection.textContent = date;
  return dateSection;
}