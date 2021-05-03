import React from 'react';
import styles from '../../styles/Skills.module.scss';

export default function ProgressBar({ skills }) {

    return (
        <div className={styles.bar}>
        <span>{skills.name}</span>
            <div className={styles.progress_div} style={{ width: '400px', height: '17px'}}>
                <div className={styles.progress} style={{ width: `${skills.width}px`, height: '17px'}}/>
            </div>
        </div>

    );
};
