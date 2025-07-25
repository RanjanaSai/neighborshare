// pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/NotFound.module.css';

const NotFound = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>404 - Page Not Found</h1>
            <p className={styles.message}>Sorry, the page you are looking for doesn't exist.</p>
            <Link to="/" className={styles.link}>Return to Home</Link>
        </div>
    );
};

export default NotFound;
