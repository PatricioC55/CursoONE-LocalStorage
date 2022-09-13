export const uniqueDates = taskList => {
  const uniqueTaskDate = [];

  taskList.forEach( task => {
    if ( !uniqueTaskDate.includes( task.dateText ) ) {
      uniqueTaskDate.push( task.dateText );
    }
  });

  return uniqueTaskDate;
}