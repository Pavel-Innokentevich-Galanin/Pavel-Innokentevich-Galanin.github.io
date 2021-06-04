import styles from './App.module.css';
import Skills from './Skills/Skills';
import Edu from './Edu/Edu';

function App()
{
    return (
        <div className={styles.wrapper}>
            <Edu />
            <Skills />
        </div>
    );
}

export default App;