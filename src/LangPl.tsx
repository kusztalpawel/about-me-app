import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import GitHub from './Images/github-mark-white.png'
import Email from './Images/email_icon.png'
import CodeImage from './Images/code_image.png'
import ChessImage from './Images/chess_image.jpg'
import FormulaImage from './Images/f1_image.jpg'

function LangPl() {
  const navigate = useNavigate();
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.7,
    };

    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.replace('fadeOut', 'fadeIn');
        } else {
          entry.target.classList.replace('fadeIn', 'fadeOut');
        }
      });
    }, options);

    const currentRevealRef = revealRef.current;
    if (currentRevealRef) {
      const fadeElms = currentRevealRef.querySelectorAll('.fade');
      fadeElms.forEach(element => observer.observe(element));
    }

    return () => {
      if (currentRevealRef) {
        const fadeElms = currentRevealRef.querySelectorAll('.fade');
        fadeElms.forEach(element => observer.unobserve(element));
      }
    };
  });

  const onButtonClick = () => {
    navigate('/');
  };

  return (
    <>
      <div className='TopBar'>
        <button onClick={onButtonClick}>
          en
        </button>
      </div>

      <div ref={revealRef}>

        <div className="Title fade fadeOut">
          Witaj na mojej stronie!
        </div>

        <div className="Introduction fade fadeOut">
          <div className="AboutTitle">O mnie</div>
          <div>
            Jestem Paweł, jestem absolwentem studiów informatycznych i początkującym programistą. <br />
            Programowanie jest moją pasją, a także karierą zawodową, którą chcę rozwijać. <br />
            Poza tworzeniem kodu moje zainteresowania to gry komputerowe, astornomia, szachy, Formuła 1 oraz filmy.<br />
            Lubię zdobywać wiedzę i zawsze jestem otwarty na nowe wyzwania oraz doświadczenia.
          </div>
          <img className='Image' src={CodeImage} alt="Example Code" />
          <img className='Image' src={ChessImage} alt="Chess Image" />
          <img className='Image' src={FormulaImage} alt="Example Code" />
        </div>

        <div className="Skills fade fadeOut">
          <div className='Panel'>
            <div className='PanelTitle'>
              Języki programowania
            </div>
            <ol>
              <li>C, C++</li>
              <li>C#</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>HTML, CSS</li>
            </ol>
          </div>

          <div className='Divider'></div>

          <div className='Panel'>
            <div className='PanelTitle'>
              Narzędzia
            </div>
            <ol>
              <li>Visual Studio</li>
              <li>Visual Studio Code</li>
              <li>Intelij IDEA</li>
              <li>Unity3D </li>
              <li>SQL Developer </li>
              <li>GitHub </li>
            </ol> 
          </div>
          
          <div className='Divider'></div>

          <div className='Panel'>
            <div className='PanelTitle'>
              Języki
            </div>
            <ol>
              <li>Polski</li>
              <li>Angielski (C1)</li>
            </ol> 
          </div>

          <div className='Divider'></div>

          <div className='Panel'>
            <div className='PanelTitle'>
              Projekty
            </div>
            <ol>
            <li><a href="https://kusztalpawel.github.io/map-veto-app/">Counter-Strike 2 Map Veto</a></li>
            </ol> 
          </div>
        </div>
      </div>
      
      <div className='Footer'>
        <div>Paweł Kusztal 2024</div>            
        <a href='mailto:pawel42000@gmail.com'>
          <img src={Email}
          alt='Mail logo'
          width='20px'
          height='20px'
          />
        </a>
        <a href='https://github.com/kusztalpawel'>
          <img src={GitHub}
            alt='Github logo'
            width='20px'
            height='20px'
            />
        </a>
      </div>
    </>
  );
}

export default LangPl;
