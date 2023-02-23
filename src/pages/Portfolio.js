import styles from "./Portfolio.module.css"

function Portfolio(){
    return(
        <div>
            <h1 className={styles.developer}>
                Game Developer
            </h1>
            <div className={styles.profile}>
                <h2 className={styles.intro}>
                    The Best Choice to develop the Game with
                </h2>
            </div>
        </div>
    );
}

export default Portfolio;
