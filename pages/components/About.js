import React from 'react';
import styles from '../../styles/Projects.module.scss';

export default function About() {
    return (
        <div className={styles.container}>
           <h2>À propos de moi</h2>
           <div className={styles.about}>
               <p>Bonjour, je suis Stella, 34 ans, Développeuse Fullstack Javascript</p>
               <p>Passionnée de développement Web, j'ai pratiqué en auto-didacte pendant 5 années.</p>
               <p>Il y a 2 ans maintenant, j'ai décidé de me reconvertir professionnellement, de valider mes acquis et surtout de me perfectionner.</p>
               <p>En décembre 2020, j'ai eu l'opportunité d'obtenir un <b>Titre Professionnel de Développeur Web et Web mobile</b> après une formation intensive de Développeur Fullstack Javascript à l'école O'clock, labellisée Grande École du numérique.</p>
               <p>J'ai pu bonifier mes bases en HTML, CSS et Javascript et me spécialiser en React JS et Node JS.</p>
               <p>Aujourd'hui, je prends plaisir à développer des projets personnels tout en continuant à apprendre et à faire de la veille.</p>
               <p>Je saurais mettre mes compétences au service de vos besoins dans plusieurs domaines</p>
               <p>Au plaisir d'échanger avec vous !</p>
           </div>
        </div>
    );
};
