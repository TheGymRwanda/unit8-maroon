
import Expertise from "../components/section/Expertise";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

import Wrapper from "../components/wrappers/Wrapper";
import About from '../components/section/AboutSection/About'

export default function Home() {
  return (
<Wrapper>
<Header/>
    <Expertise />
    <About />


    <Footer/>
</Wrapper>
  
  );

  

}

