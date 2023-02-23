/* eslint-disable no-array-constructor */
import styles from "./Project.module.css";
import Projects from "../components/projects";

function Project(){
    return(
        <div className={styles.container}>
            <div className={styles.projects}>
                <Projects
                    img={"/img/project/friend.png"}
                    title={"Friend Room"}
                    summary={"샌드박스형 VR게임으로 친구와 함께 방안에서 즐길 수\
                     있는 소소한 놀이들 입니다. 고등학교 소프트웨어 전시회에 제출한 \
                     작품입니다. 컨텐츠로 공중에 펜으로 그림그리기, 다트, 사격, 샌드백치기\
                     , 농구, 카드맞추기 등 여러 컨텐츠를 구현했습니다."}
                    using={Array(
                        "Unity3D",
                        "VR HTC Vive"
                    )}
                    bd={"/video/project/friend.mp4"}
                    />
                <Projects
                    img={"/img/project/VVR.png"}
                    title={"VR안전사고 예방게임"}
                    summary={"VR을 착용하고 게임을 즐길 때 일어날 수 있는 안전사고를\
                     알려주기 위한 게임입니다. 게임을 통해 \
                    안전사고를 즐겁게 익힌다 라는 주제를 잡고 제작하였습니다.\
                    해커톤에서 대상을 받은 이력이 있습니다."}
                    using={Array(
                        "Unity3D",
                        "VR HTC Vive"
                    )}/>
                <Projects
                    img={"/img/project/osolemio.png"}
                    title={"오솔레미오"}
                    summary={"openCV을 접목시킨 게임입니다. 당시\
                    유행하던 Getting Over It 통칭 항아리게임\
                    을 오마주했습니다\
                    카메라로 망치를 들고 움직이는 실제 모습을 따\
                    라서 게임 캐릭터도 지팡이를 움직입니다\
                    그렇게 지팡이로 벽을 타고 올라가 , 스테이지를\
                    클리어하는 게임입니다"}
                    using={Array(
                        "Unity2D",
                        "openCV",
                        "Socket"
                    )}/>
                <Projects
                    img={"/img/project/ddiddi.png"}
                    title={"띠띠빵빵"}
                    summary={"전공인 임베디드를 게임개발에 접목시켜 제작한 게임입니다.\
                     실제로 액셀, 브레이크, 핸들을 제작해 RaspberryPi로 입력받은 다음 \
                     윈도우에 자동차를 조종하는 게임입니다."}
                    using={Array(
                        "Unity3D",
                        "RaspberryPi",
                        "Socket",
                        "embedded"
                )}/>
                <Projects
                    img={"/img/project/backshot.png"}
                    title={"Backshot"}
                    summary={"카트보드지에 폰을 끼워 플레이하는 게임입니다.\
                    보는 방향으로 총을 발사하고 따라오는 적들을 제압하며 도망치는 게임입니다.\
                    Unity허브에 있는 강의를 보고 따라하며 만들고, 이렇게 바꿔보면 어떨까?\
                    라는 생각으로 조금 손본 게임입니다. "}
                    using={Array(
                        "Unity3D",
                        "Android"
                )}/>
                <Projects
                    img={"/img/project/school.png"}
                    title={"두근두근학교부"}
                    summary={"학교를 소개하는 게임입니다. 학교에서 일어나는 다양한 일들을\
                    컨텐츠로써 게임안에 녹여냈습니다. '대구소프트웨어고등학교'라는 주제의 \
                    해커톤에서 대상을 탄 게임입니다. "}
                    using={Array(
                        "Unity3D"
                )}/>
            </div>
        </div>
    );
}

export default Project;