import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Aboutus from "../components/Aboutus";

function About(){
    return(
        <>
        <Navbar/>
        <Hero 
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1591280063444-d3c514eb6e13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        title="About Us"
        btnClass="hide" 
        />
        <Aboutus/>
        </>
    )
}

export default About;