import Header from "../components/Header";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";
import Projets from "../components/Projets";
import Footer from "../components/Footer";
import "../style/home.scss";


function Home() {

  const scrollToTop=()=>{
  window.scrollTo( {
    top: 0,
    });
  }
  
  return (
<>

<Navbar />
<Header />
<div id="about">
<About/>
</div>
<div id="skills">
<Skills/>
</div>
<div id="projets">
<Projets/>
</div>
<div id="footer">
  <Footer/>
</div>
<div className="up" onClick={scrollToTop}>
  <img src="/icons/arrowup.svg" alt="fleche" />
</div>
</>
  );
}
export default Home;
