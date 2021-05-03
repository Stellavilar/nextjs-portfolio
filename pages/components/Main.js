import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Home.module.scss';


export default function Main() {
    return (
        <div className={styles.banner}>
        <Image src="/profil.png" width={300} height={300}/>
        <h1 className={styles.title}>
          Développeuse Fullstack Javascript
        </h1>
      </div>
    )
}
