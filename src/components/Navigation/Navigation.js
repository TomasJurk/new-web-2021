import styles from './Navigation.module.css';

const Navigation = () => {

    const expandNavigation = () => {
        const navigationSizer = document.getElementById('navigationSizer');
        if (!navigationSizer.offsetWidth) {
            navigationSizer.style.width = '20rem';
        } else {
            navigationSizer.style.width = '0rem';
        }
    }
    
    return (
        <nav className={styles.Navigation}>
            <div className={styles.MenuButtonContainer}>
                <div className={styles.MenuButtonLeft} onClick={expandNavigation} />
                <div id="navigationSizer" className={styles.MenuButtonCenter} />
                <div className={styles.MenuButtonRight} onClick={expandNavigation} />
            </div>
        </nav>
)};

export default Navigation;