import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import GitHub from './Images/github-mark-white.png'
import Email from './Images/email_icon.png'
import CodeImage from './Images/code_image.png'
import ChessImage from './Images/chess_image.jpg'
import FormulaImage from './Images/f1_image.jpg'

function LangEn() {
  const navigate = useNavigate();
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8,
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
    navigate('/pl');
  };

  return (
    <>
      <div className='TopBar'>
      <button onClick={onButtonClick}>
          pl
        </button>
      </div>

      <div ref={revealRef}>

        <div className="Title fade fadeOut">
          Welcome to my site!
        </div>

        <div className="Introduction fade fadeOut">
          <div className="AboutTitle">About me</div>
          <div>
            My name is Paweł, I studied computer science and I am a beginner programmer. <br />
            Programming is my passion and I'm trying to make it my full time job. <br />
            Apart from coding I love astronomy, chess, Formula 1, gaming and watching films. <br />
            I like learnig new things and I'm always open to new challenges and experiences.
          </div>
          <img className='Image' src={CodeImage} alt="Example Code" />
          <img className='Image' src={ChessImage} alt="Chess Image" />
          <img className='Image' src={FormulaImage} alt="Example Code" />
        </div>

        <div className="Skills fade fadeOut">
          <div className='Panel'>
            <div className='PanelTitle'>
              Programming languages
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
              Environments
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
              Languages
            </div>
            <ol>
              <li>Polish (native)</li>
              <li>English (C1)</li>
            </ol> 
          </div>

          <div className='Divider'></div>
          
          <div className='Panel'> 
            <div className='PanelTitle'>
              Projects
            </div>
            <ol>
              <li><a href="https://kusztalpawel.github.io/map-veto-app/">Counter-Strike 2 Map Veto</a></li>
            </ol> 
          </div>
        </div>
      </div>
      
      <div className='Footer'>
        <div>Made by Paweł Kusztal</div>            
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

export default LangEn;