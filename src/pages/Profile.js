/* eslint-disable no-array-constructor */
import styles from "./Profile.module.css";
import Info from "../components/info";
import Skill from "../components/skill";

function Profile(){
    //여기에 스킬도 같이 넣어버리고 얼굴도 넣을 수 있으면 넣자
    return(
        <div className={styles.profile}>
            <div className={styles.left}>
                <div className={styles.profileTitle}>
                    Who I am
                </div>
                <div className={styles.comment}>
                    이상실현을 위해 노력을 아끼지 않는 개발자입니다.
                </div>
                <div className={styles.info}>
                    <Info 
                        img={"/img/profile/person.png"}
                        info={"Name"}
                        content={"조남현"}
                    />
                    <Info 
                        img={"/img/profile/calendar.png"}
                        info={"Birth"}
                        content={"01.07.28"}
                    />
                    <Info 
                        img={"/img/profile/phone.png"}
                        info={"Phone number"}
                        content={"010-7280-0134"}
                    />
                    <Info 
                        img={"/img/profile/email.png"}
                        info={"Contact"}
                        content={"cnh0728@gmail.com"}
                    />
                </div>
            </div>
            <div className={styles.skill}>
                <div className={styles.language}>
                    <Skill 
                        title={"Language"}
                        content={
                            Array(
                                "C",
                                "C++",
                                "C#",
                                "Python",
                                "Java",
                                "JavaScript",
                                "HTML",
                                "CSS",
                                "MYSQL",
                                "Solidity"
                        )}
                    />
                </div>
                <div className={styles.framework}>
                    <Skill 
                        title={"FrameWork"}
                        content={
                            Array(
                                "Unity",
                                "React",
                                "TensorFlow",
                                "RaspberryPi",
                                "Node.js",
                                "OpenCV",
                                "MCU"
                        )}
                    />
                </div>
                <div>
                    <div className={styles.Awards}>
                        <Skill
                            title={"Awards"}
                            content={
                                Array(
                                    "2018 교내해커톤 - 대상",
                                    "2018 전국마이스터고연합해커톤 - 최우수상"
                                )}
                        />
                    </div>
                    <div className={styles.certificate}>
                        <Skill
                            title={"Certificate"}
                            content={
                                Array(
                                    "전자캐드 기능사/ 19.07",
                                    "정보처리 산업기사/ 22.07"
                                )}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Profile;