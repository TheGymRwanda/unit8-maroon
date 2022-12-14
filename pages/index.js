import Blog from "../components/section/Blog";
import Footer from "../components/layout/Footer";
import Project from "../components/section/Project/Project";
import Header from "../components/layout/Header";
import Expertise from "../components/section/Expertise";
import About from "../components/section/AboutSection/About";
import AboutMobile from "../components/section/AboutSection/AboutMobile";

export default function Home() {
  return (
    <>

      <Header />
      <Project />
      <Expertise />
      <About />
      <AboutMobile />
      <Blog />
      <Footer />
    </>
  );
}
