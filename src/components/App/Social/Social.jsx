import styles from './Social.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import
{
    faEnvelope,
}
from '@fortawesome/free-solid-svg-icons';
//import
//{
//}
//from '@fortawesome/free-regular-svg-icons';
import
{
    faTelegram,
    faGithub,
}
from '@fortawesome/free-brands-svg-icons';

function Social()
{
    return (
        <div>
            <h2>Social</h2>
            <div className={styles.b_socials}>
                {/* Telegram */}
                <a
                    href="https://t.me/Pavel_Innokentevich_Galanin"
                    className={`${styles.social_icon} ${styles.telegram}`}
                >
                    <FontAwesomeIcon icon={faTelegram} /> 
                </a>
                {/* Email */}
                <a
                    href="mailto:Pavel.Innokentevich.Galanin@gmail.com"
                    className={`${styles.social_icon} ${styles.email}`}
                >
                    <FontAwesomeIcon icon={faEnvelope} /> 
                </a>
                {/* GitHub */}
                <a
                    href="https://github.com/Pavel-Innokentevich-Galanin"
                    className={`${styles.social_icon}`}
                >
                    <FontAwesomeIcon icon={faGithub} /> 
                </a>
            </div>
        </div>
    );
}

export default Social;