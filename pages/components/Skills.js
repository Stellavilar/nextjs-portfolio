import React from 'react';
import styles from '../../styles/Skills.module.scss';
import ProgressBar from './ProgressBar';
import useSWR from 'swr';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

//Fetch data from data.js file
const fetcher = (url) => fetch(url).then((res) => res.json());


export default function Skills() {
    //React hook to fetch data
    const { data, error } = useSWR('/api/skills', fetcher);

    if(error) return <div>Erreur</div>
    if(!data) return <div>
        <Loader
            type="Puff"
            color="#ffc0cb"
            height={50}
            width={50}
            timeout={3000}
        />
    </div>

    return (
        <div className={styles.bars}>
            <h2>Compétences techniques</h2>
            <div className={styles.skills}>
                { data.map((s, i) => (
                    <ProgressBar key={i} skills={s} />
                ))}
            </div>
            <div className={styles.tech_skills}>
                <h4> <b>Mise en production:</b> AWS, Heroku, Github-pages</h4>
                <h4> <b>Versioning:</b> Git, Github</h4>
            </div>
        </div>
    );
};
