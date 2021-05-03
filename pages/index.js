import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Projects from './components/Projects';
import Main from './components/Main';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import { faEnvelope, faTools, faUserTie, faDesktop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Home() {

  //Hooks to open components:
  const [ openProject, setOpenProject ] = useState(false);
  const [ openSkills, setOpenSkills ] = useState(false);
  const [ openAbout, setOpenAbout ] = useState(false);
  const [ openContact, setOpenContact ] = useState(false);

  //On click name in the header, show home page, so hide other components:
  function onClickName() {
    setOpenProject(false);
    setOpenSkills(false);
    setOpenAbout(false);
    setOpenContact(false);
  };

  //On click buttons, open or close components:
  function onClickProjects() {
    setOpenProject(true);
    setOpenSkills(false);
    setOpenAbout(false);
    setOpenContact(false);
  };
  function onClickSkills() {
    setOpenSkills(true);
    setOpenProject(false);
    setOpenAbout(false);
    setOpenContact(false);
  };
  function onClickAbout() {
    setOpenAbout(true);
    setOpenSkills(false);
    setOpenProject(false);
    setOpenContact(false);
  };
  function onClickContact() {
    setOpenContact(true);
    setOpenAbout(false);
    setOpenSkills(false);
    setOpenProject(false);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Stella Vilar - Développeur web Fullstack Javascript</title>
        <meta name="description" content="Developpeur web fullstack javascript " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <p className={styles.name}onClick={onClickName} >STELLA VILAR</p>
          <div className={styles.menu} >
            <p className={styles.projects} onClick={onClickProjects}>Projets</p>
            <p className={styles.skills} onClick={onClickSkills}>Compétences</p>
            <p className={styles.exp} onClick={onClickAbout}>À propos de moi</p>
            <p className={styles.contact} onClick={onClickContact}>Contact</p>
          </div>
      </header>

      <main className={styles.main}>
        { openProject ? <Projects /> : <Main /> 
          && openSkills ? <Skills /> : <Main /> 
          && openAbout ? <About /> : <Main /> 
          && openContact ? <Contact /> : <Main />
        }
      </main>

      <footer>
        <div className={styles.footer}>
          <FontAwesomeIcon icon={faDesktop} style={{ width: '25px'}} onClick={onClickProjects}/>
          <FontAwesomeIcon icon={faTools} style={{ width: '25px'}} onClick={onClickSkills}/>
          <FontAwesomeIcon icon={faUserTie} style={{ width: '25px'}} onClick={onClickAbout}/>
          <FontAwesomeIcon icon={faEnvelope} style={{ width: '25px'}} onClick={onClickContact}/>
        </div>
      </footer>
    </div>
  );
};
