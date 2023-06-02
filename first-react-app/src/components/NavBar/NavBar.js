import styles from './NavBar.module.scss'
import { NavLink} from 'react-router-dom';

const NavBar = () => {

    return (
        <div className={styles.navbar}>
            <div className={styles.icon}>
                <i className="fa fa-tasks"></i>
            </div>
            <ul className={styles.titles}>
                <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                    to="/">Home</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                    to="/favorite">Favorite</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                    to="/about">About</NavLink></li>
            </ul>
        </div>
    )


}

export default NavBar;