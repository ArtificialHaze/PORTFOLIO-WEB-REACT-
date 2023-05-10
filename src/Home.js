import Acomplishments from "./components/Acomplishments/Acomplishments";
import BgAnimation from "./components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";
import Timeline from "./components/TimeLine/TimeLine";
import { Layout } from "./Layout";
import { Section } from "./ButtonSectionStyles";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
