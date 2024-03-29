import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Trip from "../components/Trip";
function Service(){
    return(
        <>
        <Navbar/>
        <Hero 
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1620065487644-1080510335f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
        title="Services"
        btnClass="hide"
        />
        <Trip/>
        </>
    )
}

export default Service;