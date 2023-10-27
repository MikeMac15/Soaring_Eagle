import IntroFZ from "../IntroToFZ/IntroFZ"
import Navbar from "../Navbar/nav"
import About from "./about/about"
import ContactBanner from "./contact/ContactBanner"
import Intro from "./top/Intro"
// import Trusted from "./top/trusted"
import Cards from "./whatsOffered/Cards"
import WhyUs from "./whyUs/Why"
import Footer from "./footer/Footer"





export default function Homepage(){

    return (
        <>  
            <div className="main">

                    <Navbar/>
                    <Intro/>
                    <WhyUs/>
                    {/* Contact us */}
                    <About/>
                    <ContactBanner/>
                    <Cards/>
                    <IntroFZ />


                    <Footer/>

            </div>
        </>
    )
}