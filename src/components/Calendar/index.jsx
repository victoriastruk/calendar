import React, { Component } from "react";
import { 
  format, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  addMonths, 
  subMonths, 
  addDays, 
  getYear, 
  isSameDay 
} from "date-fns";
import LeftPanel from "../LeftPanel";
import styles from "./Calendar.module.sass";
/* Стилізація кнопок
  Фіксована обгортка календаря
  При зміні з поточного місяця на інші ховати поточну дату календаря
  Заповнити всі рядки тижнів днями*/
class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
    };
  }


  previousMonth = () => {
    this.setState((prevState) => ({
      currentDate: subMonths(prevState.currentDate, 1),
    }));
  };

  nextMonth = () => {
    this.setState((prevState) => ({
      currentDate: addMonths(prevState.currentDate, 1),
    }));
  };

  render() {
    const { currentDate } = this.state;

    return (
      <section className={styles.calendar}>
        <LeftPanel currentDate={currentDate} />
        <RightPanel
          currentDate={currentDate}
          onPreviousMonth={this.previousMonth}
          onNextMonth={this.nextMonth}
        />
      </section>
    );
  }
}

const RightPanel = ({ currentDate, onPreviousMonth, onNextMonth }) => {
  const DAYS_OF_WEEK = ["S", "M", "T", "W", "T", "F", "S"];
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startWeek = startOfWeek(monthStart);
  const endWeek = endOfWeek(monthEnd);

  const renderCells = () => {
    const rows = [];
    let days = [];
    let day = startWeek;

    while (day <= endWeek) {
      for (let i = 0; i < 7; i++) {
        if (day >= monthStart && day <= monthEnd) {
          const isToday = isSameDay(day, currentDate);
          days.push(
            <td
              key={day.toISOString()}
              className={isToday ? styles.highlight : ""}
            >
              <time dateTime={format(day, "yyyy-MM-dd")}>
                {format(day, "d")}
              </time>
            </td>
          );
        } else {
 
          days.push(<td key={day.toISOString()}></td>);
        }
        day = addDays(day, 1);
      }
      rows.push(<tr key={format(days[0].key, "yyyy-MM-dd")}>{days}</tr>);
      days = [];
    }

    return rows;
  };

  return (
    <article className={styles.rightPanel}>
      <div className={styles.header}>
        <button onClick={onPreviousMonth}>{"<"}</button>
        <h3>
          {format(currentDate, "MMMM")} {getYear(currentDate)}
        </h3>
        <button onClick={onNextMonth}>{">"}</button>
      </div>
      <table className={styles.calendarGrid}>
        <thead>
          <tr>
            {DAYS_OF_WEEK.map((day, index) => (
              <th key={index} scope="col">
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

export default Calendar;
