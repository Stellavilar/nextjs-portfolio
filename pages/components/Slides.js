import React from 'react';
import styles from '../../styles/Projects.module.scss';
import Image from 'next/image';

export default function Slides({projects}) {
    return (
        <div className={styles.carousel}>
            <div className={styles.slide}  style={{'height' : '650px'}}>
                <div className={styles.img}>
                    <a href={projects.href} target="blank">
                        <Image src={projects.img} width={900} height={900}/>
                    </a>
                </div>
                <div className={styles.project_text}>
                    <h2>{projects.name}</h2>
                    <h3>{projects.title}</h3>
                    <p>{projects.description}</p>
                    <h3>Stack technique:</h3>
                    <ul>
                        <li>{projects.stack1}</li>
                        <li>{projects.stack2}</li>
                        <li>{projects.stack3}</li>
                        {/* if no projects, then display null */}
                        { projects.stack4 ? <li>{projects.stack4}</li> : null} 
                        { projects.stack5 ? <li>{projects.stack5}</li> : null}
                        { projects.stack6 ? <li>{projects.stack6}</li> : null}
                        { projects.stack7 ? <li>{projects.stack7}</li> : null}
                        { projects.stack8 ? <li>{projects.stack8}</li> : null}
                    </ul>
                </div>
            </div>
        </div>
    );
};
