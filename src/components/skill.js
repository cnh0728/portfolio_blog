import styles from "./skill.module.css";
import PropTypes from "prop-types";

function Skill({title, content}){
    return(
        <div className={styles.skill}>
            <h3 className={styles.title}>
                {title}
            </h3>
            <div className={styles.content}>
                {content.map((c) => (
                    <p>{c}</p>
                ))}
            </div>
        </div>
    );
}

Skill.propTypes={
    title: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Skill;