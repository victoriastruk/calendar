import { format, isSameDay } from 'date-fns';
import styles from './styles.module.css';

const DayCell = ({ day, currentDate, monthStart, monthEnd }) => {
  const isToday = isSameDay(day, currentDate);
  
  return (
    <td key={day.toISOString()} className={isToday ? styles.highlight : ""}>
      {day >= monthStart && day <= monthEnd ? (
        <time dateTime={format(day, "yyyy-MM-dd")}>
          {format(day, "d")}
        </time>
      ) : null}
    </td>
  );
};

export default DayCell;
