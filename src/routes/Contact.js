import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
function Contact (){
    return(
        <>
        <Navbar/>
        <Hero 
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1681477443350-45cfe74916e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
        title="Contacts Us"
        btnClass="hide"
        />
        </>
    )
}

export default Contact;