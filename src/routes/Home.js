import styles from "./Home.module.css";
import {SectionsContainer, Section} from 'react-fullpage';
// import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
import Portfolio from "../pages/Portfolio";
import Profile from "../pages/Profile";
import Project from "../pages/Project";

function Home(){
    const options={
        anchors: ['home','profile','project'],
    };
    return (
        <div className={styles.bg}>
            <SectionsContainer {...options}>
                <Section>
                    <Portfolio/>
                </Section>
                <Section>
                    <Profile/>
                </Section>
                <Section>
                    <Project/>
                </Section>
            </SectionsContainer>
        </div>
    );
}

export default Home;