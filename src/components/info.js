import PropTypes from "prop-types";
import styles from "./info.module.css";

function Info({img, info, content}){
    return(
        <div className={styles.box}>
            <div className={styles.img}>
                <img src={img} alt={info}/>
            </div>
            <div className={styles.text}>
                <div className={styles.info}>
                    {info}
                </div>
                <div className={styles.content}>
                    {content}
                </div>
            </div>
        </div>
    );
}

Info.propTypes={
    img: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}

export default Info;