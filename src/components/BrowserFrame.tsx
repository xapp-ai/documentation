import React from 'react';
import styles from './BrowserFrame.module.css';

type BrowserFrameProps = {
    children: React.ReactNode;
};

const BrowserFrame: React.FC<BrowserFrameProps> = ({ children }) => {
    return (
        <div className={styles.browserFrame}>
            <div className={`${styles.browserCircle} ${styles.red}`}></div>
            <div className={`${styles.browserCircle} ${styles.yellow}`}></div>
            <div className={`${styles.browserCircle} ${styles.green}`}></div>
            {children}
        </div>
    );
};

export default BrowserFrame;
