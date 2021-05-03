import React from 'react';
import styles from '../../styles/Contact.module.scss';
import Mailto from 'reactv16-mailto';
import Image from 'next/image';

export default function Contact() {
    return (
        <div className={styles.container}>
            <h2>Contact</h2>
            <div className={styles.icons}>
                <Mailto email="vilar.stella@gmail.com" obfuscate={true} target="blank">
                    <p>&#128231;</p>
                </Mailto>
                <a href="https://www.linkedin.com/in/stella-vilar-dev/" target="blank">
                    <Image src="/linkedin.png" alt="github logo" width={35} height={35}/>
                </a>
                <a href="https://github.com/Stellavilar" target="blank">
                    <Image src="/github.png" alt="github logo" width={35} height={35}/>
                </a>
                <a  href="/CV Vilar Stella JAVASCRIPT.pdf" download="CV Vilar Stella"><button>Télécharger CV</button></a>
            </div>
        </div>
    );
};
