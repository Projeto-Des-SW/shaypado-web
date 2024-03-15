import styles from './styles.module.css'
import { Link } from 'react-router-dom'

const ClassEdit = () => {
  return (
    <div className={styles.all}>

      <div className={styles.header}>
        <Link className={styles.back} to="/shaypado-web/list-training">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.8625 3.225L13.3791 1.75L5.13745 10L13.3875 18.25L14.8625 16.775L8.08745 10L14.8625 3.225Z" fill="#6D7A72" />
          </svg>
          <h4>Voltar</h4>
        </Link>

        <div className={styles.icons}>
          {/* Ícone de editar */}
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="#65DBAD" />
            <path d="M10.9985 29.0013H14.7485L25.8085 17.9413L22.0585 14.1913L10.9985 25.2513V29.0013ZM12.9985 26.0813L22.0585 17.0213L22.9785 17.9413L13.9185 27.0013H12.9985V26.0813Z" fill="white" />
            <path d="M26.3685 11.2913C25.9785 10.9013 25.3485 10.9013 24.9585 11.2913L23.1285 13.1213L26.8785 16.8713L28.7085 15.0413C29.0985 14.6513 29.0985 14.0213 28.7085 13.6313L26.3685 11.2913Z" fill="white" />
          </svg>
          {/* Ícone de lixo */}
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="#BA1A1A" />
            <path d="M24 17V27H16V17H24ZM22.5 11H17.5L16.5 12H13V14H27V12H23.5L22.5 11ZM26 15H14V27C14 28.1 14.9 29 16 29H24C25.1 29 26 28.1 26 27V15Z" fill="white" />
          </svg>
        </div>
      </div>

      <div className={styles.titleTraining}>
        <h1>
          Turma Y
        </h1>
      </div>
      <div className={styles.exerciceList}>
        <div className={styles.exerciceContainer}>
          <div>
            <h2>Treino superiores</h2>
            <p>Segunda</p>
          </div>

          <div className={styles.icons}>
            {/* Ícone de editar */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#65DBAD" />
              <path d="M10.9985 29.0013H14.7485L25.8085 17.9413L22.0585 14.1913L10.9985 25.2513V29.0013ZM12.9985 26.0813L22.0585 17.0213L22.9785 17.9413L13.9185 27.0013H12.9985V26.0813Z" fill="white" />
              <path d="M26.3685 11.2913C25.9785 10.9013 25.3485 10.9013 24.9585 11.2913L23.1285 13.1213L26.8785 16.8713L28.7085 15.0413C29.0985 14.6513 29.0985 14.0213 28.7085 13.6313L26.3685 11.2913Z" fill="white" />
            </svg>
            {/* Ícone de lixo */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#BA1A1A" />
              <path d="M24 17V27H16V17H24ZM22.5 11H17.5L16.5 12H13V14H27V12H23.5L22.5 11ZM26 15H14V27C14 28.1 14.9 29 16 29H24C25.1 29 26 28.1 26 27V15Z" fill="white" />
            </svg>
          </div>
        </div>

        <div className={styles.exerciceContainer}>
          <div>
            <h2>Treino inferiores</h2>
            <p>Terça</p>
          </div>

          <div className={styles.icons}>
            {/* Ícone de editar */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#65DBAD" />
              <path d="M10.9985 29.0013H14.7485L25.8085 17.9413L22.0585 14.1913L10.9985 25.2513V29.0013ZM12.9985 26.0813L22.0585 17.0213L22.9785 17.9413L13.9185 27.0013H12.9985V26.0813Z" fill="white" />
              <path d="M26.3685 11.2913C25.9785 10.9013 25.3485 10.9013 24.9585 11.2913L23.1285 13.1213L26.8785 16.8713L28.7085 15.0413C29.0985 14.6513 29.0985 14.0213 28.7085 13.6313L26.3685 11.2913Z" fill="white" />
            </svg>
            {/* Ícone de lixo */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#BA1A1A" />
              <path d="M24 17V27H16V17H24ZM22.5 11H17.5L16.5 12H13V14H27V12H23.5L22.5 11ZM26 15H14V27C14 28.1 14.9 29 16 29H24C25.1 29 26 28.1 26 27V15Z" fill="white" />
            </svg>
          </div>
        </div>

        <div className={styles.exerciceContainer}>
          <div>
            <h2>Treino de Cardio</h2>
            <p>Quinta</p>
          </div>

          <div className={styles.icons}>
            {/* Ícone de editar */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#65DBAD" />
              <path d="M10.9985 29.0013H14.7485L25.8085 17.9413L22.0585 14.1913L10.9985 25.2513V29.0013ZM12.9985 26.0813L22.0585 17.0213L22.9785 17.9413L13.9185 27.0013H12.9985V26.0813Z" fill="white" />
              <path d="M26.3685 11.2913C25.9785 10.9013 25.3485 10.9013 24.9585 11.2913L23.1285 13.1213L26.8785 16.8713L28.7085 15.0413C29.0985 14.6513 29.0985 14.0213 28.7085 13.6313L26.3685 11.2913Z" fill="white" />
            </svg>
            {/* Ícone de lixo */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#BA1A1A" />
              <path d="M24 17V27H16V17H24ZM22.5 11H17.5L16.5 12H13V14H27V12H23.5L22.5 11ZM26 15H14V27C14 28.1 14.9 29 16 29H24C25.1 29 26 28.1 26 27V15Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClassEdit;