import React, { useEffect } from 'react';
import { Main } from '../layout/content/main';
import profilePhoto from '../assets/Grajeda_Aurora_Photo.jpg';
import styles from './index.module.scss';

export const About = () => {
    useEffect(() => {
        document.title = 'About - Aurora Grajeda';
    }, []);

    return (
        <Main>
            <>
                <img src={profilePhoto} alt='aurora-profile' className={styles.profilePhoto} />
                <p>
                    Hi, I’m Ro,<br/>
                    Born and raised in the Southside of Chicago, my admiration for art started as a young high school student in Chicago’s Public Schools.
                    In one of my art classes, I was taught the uniqueness of linoleum prints. 
                    Years later, I received my BFA in Studio Art with a Printmaking emphasis from Grand Valley State University in Michigan (April 2015)<br/><br/>
                    My work focuses on cultural images as a first generation Mexican American young woman and the connections and disconnections between the lifestyle of my immigrant parents and my own My cultural roots and traditions inspire me.
                    Please contact me with any questions, inquiries, or suggestions!
                </p>
            </>
        </Main>
    )
}