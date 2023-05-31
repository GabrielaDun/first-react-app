import styles from './NavBar.module.scss'

const NavBar = () => {

    return (
        <div className={styles.navbar}>
            <div className={styles.icon}>
                <i className="fa fa-tasks"></i>
            </div>
            <div className={styles.titles}>
                <a href="/">Home</a>
                <a href="/favorite">Favorite</a>
                <a href="/about">About</a>
            </div>
        </div>
    )


}

export default NavBar;