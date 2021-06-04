import styles from './App.module.css';
import Skills from './Skills/Skills';
import Edu from './Edu/Edu';
import Social from './Social/Social';
import Bio from './Bio/Bio';

function App()
{
    return (
        <div className={styles.wrapper}>
            <Bio />
            <Social />
            <Edu />
            <Skills />
        </div>
    );
}

export default App;