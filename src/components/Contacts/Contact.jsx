import React from 'react'

import styles from "./Contact.module.css";
import { getImageUrl } from '../../utils';

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div  className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out !</p>
        </div>
        <ul  className={styles.links}>
            <li  className={styles.link}>
                <img src={getImageUrl("contacts/emailIcon.png")} alt="Email Icon" />
                <a href="mailto:b.biswajitbehera2000@gmail.com">b.biswajitbehera2000@gmail.com</a>
            </li>
            <li  className={styles.link}>
                <img src={getImageUrl("contacts/linkdinIcon.png")} alt="linkdin Icon" />
                <a href="https://www.linkdin.com/myname">linkdin.com/Biswajit</a>
            </li>
            <li  className={styles.link}>
                <img src={getImageUrl("contacts/githubIcon.png")} alt="GitHub Icon" />
                <a href="https://github.com/BiswajitBeher23">github.com/Biswajit</a>
            </li>
        </ul>

    </footer>
  )
}
