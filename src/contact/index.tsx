import React, { useEffect } from 'react';
import { Main } from '../layout/content/main';
import styles from './index.module.scss';

export const Contact = () => {
    useEffect(() => {
        document.title = 'Contact - Aurora Grajeda';
    }, []);

    return (
        <Main>
            <>
                <div className={styles.contactDetails}>
                    <p>Aurora 'Ro' Grajeda</p>
                    <p><a href="mailto:ro@auroragrajeda.com">ro@auroragrajeda.com</a></p>
                    <p>Chicago, IL</p>
                </div>
                {/* 
                // @ts-ignore */}
                <form name="contactForm" netlify netlify-honeypot="bot-field" className={styles.form} method='post'>
                    <input type="hidden" name="form-name" value="contactForm" />
                    <div className={styles.fields}>
                        <section className={styles.formSection}>
                            <input type='text' name='name' placeholder='Name' required />
                            <input type='email' name='email' placeholder='Email' required />
                            <input type='text' name='subject' placeholder='Subject' required />
                        </section>
                        <section className={styles.formSection}>
                            <textarea name='message' placeholder='Message' required></textarea>
                        </section>
                    </div>
                    <p style={{ display: 'none' }}>
                        <label>Don’t fill this out: <input name="bot-field" /></label>
                    </p>
                    <button type="submit" className={styles.button}>Send</button>
                </form>
            </>
        </Main>
    )
}