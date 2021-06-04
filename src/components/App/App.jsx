import styles from './App.module.css';
import Skills from './Skills/Skills';
import Edu from './Edu/Edu';
import Bio from './Bio/Bio';

function App()
{
    return (
        <div className={styles.wrapper}>
            <Bio />
            <Edu />
            <Skills />
        </div>
    );
}

export default App;