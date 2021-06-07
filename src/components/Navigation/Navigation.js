import { useEffect, useState } from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {

    const [shadowBlur, setShadowBlur] = useState('20');
    const [navigationSize, setNavigationSize] = useState('0');

    const expandNavigation = () => {
        if (navigationSize === '0') {
            setShadowBlur('0');
            setNavigationSize('20');
        } else {
            setNavigationSize('0');
        }
    }

    const pulse = () => {
        if (shadowBlur === '0' && navigationSize === '0') {
            setShadowBlur('20');
        } else {
            setShadowBlur('0');
        }
    }

    useEffect(() => {
        const interval = setInterval(pulse, 1500);
        return () => clearInterval(interval);
    });
    
    return (
        <nav className={styles.Navigation}>
            <div style={{boxShadow: `0px 0px ${shadowBlur}px 0px #fff`}} className={styles.MenuButtonContainer}>
                <div className={styles.MenuButtonLeft} onClick={expandNavigation} />
                <div style={{width: `${navigationSize}rem`}} className={styles.MenuButtonCenter}>
                    <ul>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#hobbies">Hobbies</a>
                        </li>
                        <li>
                            <a href="#contactMe">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.MenuButtonRight} onClick={expandNavigation} />
            </div>
        </nav>
)};

export default Navigation;