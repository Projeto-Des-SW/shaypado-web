import React, { useState } from 'react';
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

const StudentInfo = () => {
  const [showStudentInfo, setShowStudentInfo] = useState(false);

  const toggleStudentInfo = () => {
    setShowStudentInfo(!showStudentInfo);
  };

  return (
    <div className={styles.all}>

      <div className={styles.botoes}>
        <Link to="/shaypado-web/list-students">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.8625 3.225L13.3791 1.75L5.13745 10L13.3875 18.25L14.8625 16.775L8.08745 10L14.8625 3.225Z" fill="#6D7A72" />
          </svg>
          <h4>Voltar</h4>
        </Link>

        <div>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="#65DBAD" />
            <path d="M10.9985 29.0013H14.7485L25.8085 17.9413L22.0585 14.1913L10.9985 25.2513V29.0013ZM12.9985 26.0813L22.0585 17.0213L22.9785 17.9413L13.9185 27.0013H12.9985V26.0813Z" fill="white" />
            <path d="M26.3685 11.2913C25.9785 10.9013 25.3485 10.9013 24.9585 11.2913L23.1285 13.1213L26.8785 16.8713L28.7085 15.0413C29.0985 14.6513 29.0985 14.0213 28.7085 13.6313L26.3685 11.2913Z" fill="white" />
          </svg>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="#65DBAD" />
            <path d="M27 12H26V10H24V12H16V10H14V12H13C11.89 12 11.01 12.9 11.01 14L11 28C11 29.1 11.89 30 13 30H27C28.1 30 29 29.1 29 28V14C29 12.9 28.1 12 27 12ZM27 28H13V18H27V28ZM27 16H13V14H27V16ZM17 22H15V20H17V22ZM21 22H19V20H21V22ZM25 22H23V20H25V22ZM17 26H15V24H17V26ZM21 26H19V24H21V26ZM25 26H23V24H25V26Z" fill="white" />
          </svg>
        </div>
      </div>

      <div className={styles.profileName}>
        <div>
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="40" fill="#D9D9D9" />
          </svg>
        </div>

        <div>
          <h2>Rogério Lacerda</h2>
          <p>exemplo@gmail.com</p>
        </div>
      </div>

      <div className={styles.ficha}>
        <div className={styles.fichaTitle}>
          <h1>Ficha</h1>
          <svg
            className={`${styles.svgIcon} ${showStudentInfo ? styles.rotated : ''}`}
            width="40" height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={toggleStudentInfo}
          >
            <rect width="40" height="40" rx="8" fill="#65DBAD" />
            <path d="M11.8701 14.165L10.1001 15.945L20.0001 25.835L29.9001 15.935L28.1301 14.165L20.0001 22.295L11.8701 14.165Z" fill="white" />
          </svg>
        </div>

        {showStudentInfo && (
          <div className={styles.studentInfo}>
            <p>Altura: 172cm</p>
            <p>Idade: 23 anos</p>
            <p>Peso: 65 kg</p>
            <p>Possui experiência: Sim</p>
            <p>É fumante: Sim</p>
            <p>Problemas na coluna: Sim</p>
            <p>Problemas de saúde: Os problemas são:</p>
            <p>Ombro inflamado</p>
            <p>Joelho dolorido</p>
            <Link></Link>
          </div>
        )}
      </div>

      <div className={styles.linha}>
        <h1>Treino</h1>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="8" fill="#65DBAD" />
          <path d="M27 21H21V27H19V21H13V19H19V13H21V19H27V21Z" fill="white" />
        </svg>
      </div>

      <div className={styles.linha}>
        <h2>Treino de superiores</h2>

        <div>
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

    </div >
  )
}

export default StudentInfo