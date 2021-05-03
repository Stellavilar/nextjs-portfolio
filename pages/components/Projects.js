import React from 'react';
import useSWR from 'swr';
import styles from '../../styles/Projects.module.scss';
import { Slide } from 'react-slideshow-image';
import Slides from './Slides';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'react-slideshow-image/dist/styles.css';

//Fetch data from projects.js file
const fetcher = (url) => fetch(url).then((res) => res.json());


export default function Projects() {
    //React hook to fetch data
    const { data, error } = useSWR('/api/projects', fetcher);

    //Display message error or loader
    if(error) return <div style={{color: '#fff'}} >Erreur</div>
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
        <div className={styles.container}>
            <Slide>
                { data.map((p, i) => (
                    <Slides key={i} projects={p}/>
                ))}
            </Slide> 
        </div>  
    );
};
