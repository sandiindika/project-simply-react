import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.png")} alt="Sitting with a laptop" className={styles.aboutImage} />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Front-end Developer</h3>
                            <p>
                                I'm a front-end developer with experience in building responsive and optimized sites
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Back-end Developer</h3>
                            <p>
                                I have experience developing fast and optimized back-end systems and APIs
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
                        <div className={styles.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p>
                                I have designed multiple landing pages and have created design systems as well
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};