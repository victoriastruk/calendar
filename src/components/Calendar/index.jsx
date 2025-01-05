import { Component } from "react";
import {format, getDate,getYear, getMonth} from 'date-fns'
import styles from "./Calendar.module.sass";

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDate: new Date(),
    };
  }

  render() {
    const { currentDate } = this.state;
    return (
      <section className={styles.calendar}>
        <LeftPanel currentDate={currentDate} />
        <RightPanel currentDate={currentDate} />
      </section>
    );
  }
}
const LeftPanel = ({currentDate}) => {
  return (
  <article className={styles.leftPanel}>
    <header>
      <h2>{format(currentDate, 'eeee')}</h2>
    </header>
    <time className={styles.date}>
      {getDate(currentDate)}
    </time>
  </article>
  )
};

const RightPanel = ({currentDate}) => {
  return(
  <article className={styles.rightPanel}>
      <h3>{format(currentDate, 'MMMM')} {getYear(currentDate)}</h3>
    <table className={styles.calendarGrid}>
      <thead>
        <tr>
          <th scope="col">S</th>
          <th scope="col">M</th>
          <th scope="col">T</th>
          <th scope="col">W</th>
          <th scope="col">T</th>
          <th scope="col">F</th>
          <th scope="col">S</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>
        <tr>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>10</td>
          <td>11</td>
        </tr>
        <tr>
          <td>12</td>
          <td>13</td>
          <td>14</td>
          <td>15</td>
          <td>16</td>
          <td>17</td>
          <td>18</td>
        </tr>
        <tr>
          <td>19</td>
          <td>20</td>
          <td>21</td>
          <td>22</td>
          <td>23</td>
          <td>24</td>
          <td>25</td>
        </tr>
        <tr>
          <td>26</td>
          <td>27</td>
          <td>28</td>
          <td>29</td>
          <td>30</td>
          <td className={styles.highlight}>
            <time dateTime={format(currentDate, "yyyy-MM-dd")}>31</time>
          </td>
        </tr>
      </tbody>
    </table>
  </article>
  )
};

export default Calendar;
