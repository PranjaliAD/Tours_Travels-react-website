import Destination from "../components/Destination";
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Trip from "../components/Trip";
function Home(){
    return(
        <>
        <Navbar/>
        <Hero 
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
        />
        <Destination/>
        <Trip/>
        </>
    )
}

export default Home;