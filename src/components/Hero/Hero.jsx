import React from 'react'

import styles from "./Hero.module.css"
import { getImageUrl } from '../../utils'


export const Hero = () => {
  return (
   
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Biswajit</h1>
            <div className={styles.animated}>
              I'M a- <span ></span> 
            </div>
            <a href="b.biswajitbehera2000@gmail.com" className={styles.contactBtn}>Contact me</a>
        </div>
        <img src={getImageUrl("Hero/heroimage.png")} alt="Hero image of me" className={styles.heroImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.botttomBlur}></div>
    </section>
    
  )
}
