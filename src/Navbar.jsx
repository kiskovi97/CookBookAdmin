import styles from './Header.module.css';
import { Link } from 'react-router'

var Navbar = () =>
{
    return  (
        <div className={styles.main}>
            <div className={styles.title}>
                <div> <Link to="/">Admin</Link></div>
            </div>
            <div className={styles.tabs}>
                <div> <Link to="/dbdishes" >All</Link></div>
                <div> <Link to="/upload" >Upload</Link></div>
            </div>
        </div>)
}

export default Navbar;
