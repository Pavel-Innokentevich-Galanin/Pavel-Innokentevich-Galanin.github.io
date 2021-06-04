import myImg from './I.jpg';
import styles from './Bio.module.css';

function Bio()
{
    return (
        <div>
            <h1 align="center">Pavel Innokentevich Galanin</h1>
            <div className={styles.img}>
                <img src={myImg} />
            </div>
        </div>
    );
}

export default Bio;