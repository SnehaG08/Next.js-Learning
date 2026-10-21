import Footer from "@/components/ui/Footer";
import FeaturedWriting from "@/components/ui/home/FeaturedWriting";
import HeroHome from "@/components/ui/home/Hero";
import ToolsAbout from "@/components/ui/home/ToolsAbout";
import Navbar from "@/components/ui/Navbar";
import "@/styles/home.css"


export default function Home() {
    return(
        <>
            <Navbar />
            <HeroHome />
            <FeaturedWriting />
            <ToolsAbout />
            <Footer /> 
        </>
    );
}