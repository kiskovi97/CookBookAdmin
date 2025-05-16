import styles from './Page.module.css'
import AddDishButton from './Components/AddDishButton'

var Upload = () =>
{
    return (
    <div className={styles.page}>
        <AddDishButton />
    </div>);
}

export default Upload