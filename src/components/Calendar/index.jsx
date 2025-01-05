import React from "react";
import styles from "./Calendar.module.sass";
function Calendar() {
  return (
    <section className={styles.calendar}>
      <article className={styles.leftPanel}>
        <header>
          <h2>FRIDAY</h2>
        </header>
        <time datetime="2020-07-31" className={styles.date}>
          31
        </time>
      </article>

      <article className={styles.rightPanel}>
        <header>
          <h3>JULY 2020</h3>
        </header>
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
                <time datetime="2020-07-31">31</time>
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </section>
  );
}

export default Calendar;
