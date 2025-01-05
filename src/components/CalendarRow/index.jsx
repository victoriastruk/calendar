import DayCell from './DayCell';

const CalendarRow = ({ startWeek, currentDate, monthStart, monthEnd }) => {
  const days = [];
  let day = startWeek;

  for (let i = 0; i < 7; i++) {
    days.push(
      <DayCell 
        key={day.toISOString()}
        day={day}
        currentDate={currentDate}
        monthStart={monthStart}
        monthEnd={monthEnd}
      />
    );
    day = addDays(day, 1);
  }

  return <tr>{days}</tr>;
};

export default CalendarRow;
