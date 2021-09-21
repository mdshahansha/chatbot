import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
    const brandStyle = {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '22px',
        display: 'flex',
        alignItems: 'center',
    };

    const logoText = {
        marginLeft: '10px',
    };

    return (
        <nav className={`${styles.navbar} container`}>
            {/* ye link-> ke liye hmlog styling navigation.module.css se nhi kar sakte  ,iske liye inline styling karna parta h  (KIYU KI YE CHILD COMPONENT H) */}
            <Link style={brandStyle} to="/">
                <img src="/images/logo.png" alt="logo" />
                <span style={logoText}>ChatBot</span>
            </Link>
        </nav>
    );
};
export default Navigation;