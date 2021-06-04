import styles from './Skills.module.css';
import arr__web_skills from './arr__web_skils';
import arr__tools from './arr__tools';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Skills()
{
    return (
        <div>
            <h2>Langs and tools</h2>
            <WriteSkills 
                title="Web"
                arr={arr__web_skills}
            />
            <WriteSkills
                title="Other tools"
                arr={arr__tools}
            />
        </div>
    );
}

const WriteSkills = (props) => 
{  
    const MyHTML = () => props.arr.map((object, index) =>
        <div key={index} className={styles.item}>
            <span><FontAwesomeIcon icon={object.icon} color={object.color}/> </span>
            <span>{object.name} </span>
        </div>
    );

    return (
        <div>
            <h3>{props.title}</h3>
            <div className={styles.block_for_items}>
                <MyHTML />
            </div>
        </div>
    );
};

export default Skills;