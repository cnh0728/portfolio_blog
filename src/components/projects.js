import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./Projects.module.css";
// import styled from "styled-components";

// let BgWrapper = styled.div`
//     background: url("../img/bg_human.jpg");
// `;

function Projects({img, title, summary, using, bd}){
    const [hover, setHover] = useState(false);
    // console.log(styles["tooltiptext"]);
    return(
        <div className={styles.project}
            onMouseEnter={()=>{
                setHover(true);
                document.getElementById(title).play();
            }}
            onMouseLeave={()=>{
                setHover(false);
                document.getElementById(title).pause();
            }}
            onMouseMove={(e)=>{
                
            }}
        >
            <img src={img} alt={title} className={styles.project__img}/>
            <div>
                <h2 className={styles.project__title}>{title}</h2>
                <p>{(summary.length > 100 && !hover) ? `${summary.slice(0,100)}...` : summary}</p>
                <ul className={styles.project__using}>
                {using.map((g) => (
                    <li key={g}>{g}</li>
                ))}
                </ul>
                
                {/* {(bd !== undefined) ? 
                    <span className={styles["tooltiptext"]}>
                        <video id={title} width="600" height="300" loop>
                            <source src={bd}/>
                        </video>
                    </span> :
                    <span className={styles["tooltiptext"]}>
                        no video
                    </span>
                } */}
            </div>
        </div>
    );
}

Projects.propTypes={
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    using: PropTypes.arrayOf(PropTypes.string).isRequired,
    bd: PropTypes.string
}

export default Projects;