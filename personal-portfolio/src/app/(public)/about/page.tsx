import AboutCardSec from "@/components/ui/about/AboutCardSec";
import AboutInfo from "@/components/ui/about/AboutInfo";
import AboutSkills from "@/components/ui/about/AboutSkills";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

export default function About() {
    return(
        <>
        
            <Navbar />
            <AboutCardSec />
            <AboutInfo />
            <AboutSkills />
            <Footer />

        </>
    );
}