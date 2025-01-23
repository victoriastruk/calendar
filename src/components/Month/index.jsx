import {
  format,
  startOfMonth,
  startOfWeek,
  addDays,
  getYear,
  isSameDay,
  isSameMonth,
} from "date-fns";
import styles from './Month.module.sass'

const Month = ({
  currentDate,
  highlightCurrentDate,
  onPreviousMonth,
  onNextMonth,
}) => {
  const DAYS_OF_WEEK = ["S", "M", "T", "W", "T", "F", "S"];
  const monthStart = startOfMonth(currentDate);
  const startWeek = startOfWeek(monthStart);

  const renderCells = () => {
    const rows = [];
    let days = [];
    let day = startWeek;
    const totalDays = 6 * 7;

    for (let i = 0; i < totalDays; i++) {
      const isCurrentDate =
        highlightCurrentDate &&
        isSameDay(day, new Date()) &&
        isSameMonth(day, currentDate);
      const isInCurrentMonth = isSameMonth(day, currentDate);

      days.push(
        <td
          key={day.toISOString()}
          className={`${isCurrentDate ? styles.highlight : ""} ${
            isInCurrentMonth ? "" : styles.disabled
          }`}
        >
          <time dateTime={format(day, "yyyy-MM-dd")}>{format(day, "d")}</time>
        </td>
      );

      day = addDays(day, 1);

      if (days.length === 7) {
        rows.push(<tr key={format(days[0].key, "yyyy-MM-dd")}>{days}</tr>);
        days = [];
      }
    }

    return rows;
  };

  return (
    <article className={styles.rightPanel}>
      <div className={styles.header}>
        <button className={styles.btn} onClick={onPreviousMonth}>
          {"<"}
        </button>
        <h3>
          {format(currentDate, "MMMM")} {getYear(currentDate)}
        </h3>
        <button className={styles.btn} onClick={onNextMonth}>
          {">"}
        </button>
      </div>
      <table className={styles.calendarGrid}>
        <thead>
          <tr>
            {DAYS_OF_WEEK.map((day, index) => (
              <th className={styles.dayOfWeek} key={index} scope="col">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{renderCells()}</tbody>
      </table>
    </article>
  );
};
 export default Month;