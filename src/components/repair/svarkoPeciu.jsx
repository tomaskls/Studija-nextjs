import React from 'react';
import style from './rankoviu.module.css';
import Image from 'next/image';


export default function Repair5() {
    return (
        <div className={style.container}>
            <h3 className={style.h3}>Švarko rankovių perstatymas</h3>
            <Image className={style.img}
                src="/Images/Svarko_peciu_perstatymas.webp"
                alt="Švarko rankovių perstatymo etapai"
                width={900}
                height={1350}
                priority={false}
            />
        </div>
    )
}