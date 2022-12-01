import Project from "../components/section/Project";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Expertise from "../components/section/Expertise";
import About from "../components/section/AboutSection/About";
export default function Home() {
  return (
    <>
      <Header />
      <Project />
      <Expertise />
      <About />
      <Footer />
    </>
  );
}

