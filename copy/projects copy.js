import PropTypes from "prop-types";
import styles from "./Projects.module.css";

function Projects({img, title, summary, using}){
    return(
        <div className={styles.project}>
            {console.log(`Project ${img}`)}
            {console.log(`title ${title}`)}
            <img src={img} alt={title} className={styles.project__img}/>
            <div>
                <h2 className={styles.project__title}>{title}</h2>
                <p>{summary.length > 100 ? `${summary.slice(0,100)}...` : summary}</p>
                <ul className={styles.project__using}>
                {using.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
            </div>
        </div>
    );
}

Projects.propTypes={
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    using: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Projects;