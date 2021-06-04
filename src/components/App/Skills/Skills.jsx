import styles from './Skills.module.css';
import arr__web_skills from './arr__web_skils';
import arr__tools from './arr__tools';

function Skills()
{
    return (
        <div>
            <h3>Web</h3>
            <WriteSkills arr={arr__web_skills}/>
            <h3>Other tools</h3>
            <WriteSkills arr={arr__tools}/>
        </div>
    );
}

const WriteSkills = (props) => 
{  
    console.log(props.arr)
    return  props.arr.map((object, index) =>
        <div key={index} className={styles.item}>
            <div className={styles.text}>{object.name}</div>
            <div className={styles.progress_bar}>
                <div
                    className={styles.progress_bar__line}
                    style={{
                        width: `${object.value}%`
                    }}
                >
                    {/*  */}
                </div>
            </div>
        </div>
    );
};

export default Skills;