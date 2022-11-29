import Project from "../components/section/Project";
import Footer from "../components/layout/Footer";
import Header from "../../Header";
import Wrapper from "../components/wrappers/Wrapper";
export default function Home() {

  return (
  <>
    <Wrapper>
      <Header/>
      <Project/>
      <Footer/>
    </Wrapper>
  </>
  );
}

