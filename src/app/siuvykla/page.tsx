import React from 'react';
import { Zirkles, Adata } from '../../components/svg';
import style from './Sewing.module.css';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Siuvykla Šiauliuose",
    description: "Ieškote siuvėjos Šiauliuose? Individualus suknelių, kelnių, kostiumėlių ir kitų drabužių siuvimas pagal Jūsų figūrą ir pageidavimus.Stilingi ir kokybiški drabužiai už patrauklią kainą.",
    openGraph: {
        title: 'Siuvykla Šiauliuose', //  Sutampa su pagrindiniu title
        description: 'Ieškote siuvėjos Šiauliuose? Individualus suknelių, kelnių, kostiumėlių ir kitų drabužių siuvimas pagal Jūsų figūrą ir pageidavimus.Stilingi ir kokybiški drabužiai už patrauklią kainą.', // Sutampa su pagrindiniu description
        url: 'https://www.neringos-siuvimo-studija.lt/siuvykla', // Pakeiskite į savo svetainės adresą
        siteName: 'Neringos Siuvimo Studija', // Pakeiskite į savo svetainės pavadinimą
        type: 'website',
        images: [
            {
                url: 'https://www.neringos-siuvimo-studija.lt/images/rubu_siuvimas_900.webp', // Pakeiskite į savo paveikslėlio adresą
                width: 900,
                height: 1352,
            },
        ],
    },
    alternates: {
        canonical: 'https://www.neringos-siuvimo-studija.lt/siuvykla',
        }
};

export default function Sewing() {

    return (
        <>
            <div className={style.container}>
                <Image className={style.img}
                    src="/Images/rubu_siuvimas_900.webp"
                    alt="Siuvykla Šiauliuose"
                    width={900}
                    height={1350}
                    priority={true}
                />
                <div className={style.content}>
                    <h1 className={style.h2}>Ateik su idėja, išeik su drabužiu!</h1>
                    <p className={style.p}>Kiekvienas turi savo unikalų stilių, bet ne visada lengva jį rasti parduotuvėje. Čia mes įžengiame į žaidimą - siuvame pagal jūsų norus ir poreikius. Nesvarbu, ar tai būtų kostiumas su per dideliais atlapais, suknelė, kuri privers suktis galvas kiekviename žingsnyje, ar džemperis, kuriame norėtumėt praleisti visą žiemą, mes pasirūpinsime, kad tai taptų realybe.</p>
                    <ul className={style.repairList}>
                        <li>Moteriškų drabužių siuvimas</li>
                        <li>Vyriškų drabužių siuvimas</li>
                        <li>Vaikiškų drabužių siuvimas</li>
                    </ul>
                    <div className={style.svg}><Zirkles /></div>
                </div>
            </div>
            <div className={`${style.container} ${style.container2}`}>
                <Image className={style.img2}
                    src="/Images/design_900.webp"
                    alt="Suknele su aplikacija"
                    width={900}
                    height={1718}
                    priority={false}
                />
                <div className={style.content}>
                    <h1 className={style.h2}>Modeliavimas išskirtiniai drabužiai jums</h1>
                    <p className={style.p}>„Nuo idėjos iki podiumo - mūsų modeliavimo paslaugos jūsų sėkmei!“ Ieškote tobulo drabužio, bet nerandate jo parduotuvėje? Laikas sukurti jį patiems! Mūsų modeliavimo paslauga leis jums realizuoti savo kūrybines vizijas ir sukurti drabužį, kuris bus unikalus, stilingas ir puikiai pritaikytas būtent jums.</p>
                    <div className={style.svg} ><Adata /></div>
                </div>
            </div>
        </>
    );
}
