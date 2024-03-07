import ExampleGraph from '../ExampleGraph';
import LinearGraph from '../LinearGraph';
import PieGraph from '../PieGraph';
import styles from './styles.module.css';

const StudentContent = () => {
  const tamanhoDois = {
    x: 1000,
    y: 200,
  }
  return (
    <div className={styles.all}>
      <div className={styles.containerSetup}>
        <div className={styles.calendarContainer}>
          <h2>00/00/00 - 00/00/00</h2>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.5 6H27V3H24V6H12V3H9V6H7.5C5.835 6 4.515 7.35 4.515 9L4.5 30C4.5 31.65 5.835 33 7.5 33H28.5C30.15 33 31.5 31.65 31.5 30V9C31.5 7.35 30.15 6 28.5 6ZM28.5 30H7.5V15H28.5V30ZM28.5 12H7.5V9H28.5V12ZM13.5 21H10.5V18H13.5V21ZM19.5 21H16.5V18H19.5V21ZM25.5 21H22.5V18H25.5V21ZM13.5 27H10.5V24H13.5V27ZM19.5 27H16.5V24H19.5V27ZM25.5 27H22.5V24H25.5V27Z" fill="#171D1A" />
          </svg>
        </div>

        <div className={styles.measuresContainer}>
          <h3>Quais medidas você deseja analisar?</h3>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.8049 9.2475L3.1499 11.9175L17.9999 26.7525L32.8499 11.9025L30.1949 9.2475L17.9999 21.4425L5.8049 9.2475Z" fill="#171D1A" />
          </svg>
        </div>
      </div>

      <div className={styles.containerSetup}>
        <div className={styles.pizzaContainer}>
          <PieGraph />
        </div>
        <div className={styles.linearContainer}>
          <LinearGraph />
        </div>

      </div>

      <div className={styles.bigGraph}>
        <ExampleGraph tamanhoX={tamanhoDois.x} tamanhoY={tamanhoDois.y} />
      </div>
    </div>
  )
}

export default StudentContent