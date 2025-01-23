import React, { Component } from "react";
import {
  addMonths,
  subMonths,
  isSameMonth,
} from "date-fns";
import CurrentDay from "../CurrentDay";
import Month from "../Month"
import styles from "./Calendar.module.sass";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
      fixedDate: new Date(),
      highlightCurrentDate: true,
    };
  }
  componentDidMount() {
    this.updateHighlightState();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentDate !== this.state.currentDate) {
      this.updateHighlightState();
    }
  }

  updateHighlightState = () => {
    const { currentDate } = this.state;
    const today = new Date();
    const isSameMonthView = isSameMonth(currentDate, today);

    this.setState({ highlightCurrentDate: isSameMonthView });
  };
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
    const { currentDate, fixedDate, highlightCurrentDate } = this.state;

    return (
      <section className={styles.calendar}>
        <CurrentDay currentDate={fixedDate} />
        <Month
          currentDate={currentDate}
          highlightCurrentDate={highlightCurrentDate}
          onPreviousMonth={this.previousMonth}
          onNextMonth={this.nextMonth}
        />
      </section>
    );
  }
}

export default Calendar;
