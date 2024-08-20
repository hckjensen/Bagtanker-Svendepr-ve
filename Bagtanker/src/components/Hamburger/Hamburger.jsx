import styles from './Hamburger.module.css';


const Hamburger = () => {

    function menuBtnFunction(menuBtn) {
        menuBtn.classList.toggle("active");
    }

    return (
        <div className={styles.menuBtn5} onClick={menuBtnFunction(this)}>
            <span></span>
            <span></span>
        </div>
    )
}

export default Hamburger