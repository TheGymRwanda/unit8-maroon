import Project from "../components/section/Project";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Wrapper from "../components/wrappers/Wrapper";
import Expertise from "../components/section/Expertise";
export default function Home() {

  return (
  <>
    <Wrapper>
      <Header/>
      <Project/>
      <Expertise/>
      <Footer/>
    </Wrapper>
  </>

  );
}

