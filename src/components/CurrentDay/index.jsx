import { format } from "date-fns";

import styles from "./CurrentDay.module.sass";

function CurrentDay({ currentDate }) {
  return (
    <article className={styles.leftPanel}>
      <header>
        <h2>{format(currentDate, "eeee")}</h2>
      </header>
      <time className={styles.date} dateTime={currentDate}>{format(currentDate, "d")}</time>
    </article>
  );
}

export default CurrentDay;
