import styles from './LeftPanel.module.sass'
import { format, getDate } from 'date-fns';
function LeftPanel({currentDate}) {
  return (
    <article className={styles.leftPanel}>
      <header>
        <h2>{format(currentDate, "eeee")}</h2>
      </header>
      <time className={styles.date}>{getDate(currentDate)}</time>
    </article>
  );
}

export default LeftPanel;
