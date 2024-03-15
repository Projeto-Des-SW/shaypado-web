import perfil from '../../assets/profire-300x300.png';
import React, { useState } from 'react';
import styles from './styles.module.css';
import Search from '../Search';
import { Link } from 'react-router-dom'

const ClassCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const names = ["Turma 1", "Turma2", "Turma 3", "Turma4", "Turma 5", "Turma6", "Turma 7", "Turma8"];

  const handleNext = () => {
    if (currentIndex < names.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };

  const canGoNext = currentIndex < names.length - 4;
  const canGoPrevious = currentIndex > 0;

  const filteredNames = names.filter(name =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderStudents = () => {
    if (filteredNames.length === 0) {
      return (
        <div className={styles.card}>
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="100" fill="#C2C2C2" />
          </svg>
          <h2>Erro:</h2>
          <p>Turma não encontrada</p>
        </div>
      );
    } else {
      const currentNames = filteredNames.slice(currentIndex, currentIndex + 4);
      return currentNames.map((name, index) => (
        <Link to="/shaypado-web/manage-class" className={styles.card} key={index}>
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="100" fill="#C2C2C2" />
          </svg>
          <h2>{name}</h2>
        </Link>
      ));
    }
  };

  return (
    <div className={styles.container}>
      <Search title="Buscar por turma:" placeholder="Digite o nome da turma que deseja" setSearchTerm={setSearchTerm} />

      <div className={styles.cardList}>
        <div className={styles.cardsContainer}>{renderStudents()}</div>
        <div className={styles.controls}>
          <button className={styles.controlButton} onClick={handlePrevious} disabled={!canGoPrevious}>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_409_1239)">
                <rect x="4" width="72" height="72" rx="8" fill="#6C6AC3" />
              </g>
              <path d="M48.7526 23.805L46.0826 21.15L31.2476 36L46.0976 50.85L48.7526 48.195L36.5576 36L48.7526 23.805Z" fill="white" />
              <defs>
                <filter id="filter0_d_409_1239" x="0" y="0" width="80" height="80" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_409_1239" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_409_1239" result="shape" />
                </filter>
              </defs>
            </svg>
          </button>
          <button className={styles.controlButton} onClick={handleNext} disabled={!canGoNext}>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_409_1239)">
                <rect x="4" width="72" height="72" rx="8" fill="#6C6AC3" />
              </g>
              <path d="M31.2474 48.195L33.9174 50.85L48.7524 36L33.9024 21.15L31.2474 23.805L43.4424 36L31.2474 48.195Z" fill="white" />
              <defs>
                <filter id="filter0_d_409_1239" x="0" y="0" width="80" height="80" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_409_1239" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_409_1239" result="shape" />
                </filter>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCards;