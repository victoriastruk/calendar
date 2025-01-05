import React from 'react';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays } from 'date-fns';
import CalendarRow from './CalendarRow';

const RightPanel = ({ currentDate }) => {
  const DAYS_OF_WEEK = ["S", "M", "T", "W", "T", "F", "S"];
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startWeek = startOfWeek(monthStart);
  const endWeek = endOfWeek(monthEnd);

  const renderCells = () => {
    const rows = [];
    let day = startWeek;

    while (day <= endWeek) {
      rows.push(
        <CalendarRow 
          key={format(day, "yyyy-MM-dd")}
          startWeek={day}
          currentDate={currentDate}
          monthStart={monthStart}
          monthEnd={monthEnd}
        />
      );
      day = addDays(day, 7);
    }

    return rows;
  };

  return (
    <table>
      <thead>
        <tr>
          {DAYS_OF_WEEK.map((day, idx) => (
            <th key={idx}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>{renderCells()}</tbody>
    </table>
  );
};

export default RightPanel;
