export const uniqueDates = taskList => {
  const uniqueTaskDate = [];

  taskList.forEach( task => {
    if ( !uniqueTaskDate.includes( task.dateText ) ) {
      uniqueTaskDate.push( task.dateText );
    }
  });

  return uniqueTaskDate;
}

export const orderDates = dates => {
  return dates.sort(( a, b ) => {
    const firstDate = moment( a, 'DD/MM/YYYY' );
    const secondDate = moment( b, 'DD/MM/YYYY' );
    return firstDate - secondDate;
  });
}