import Navbar from "../Navbar/nav"
import About from "./about/about"
import Intro from "./top/Intro"
import Trusted from "./top/trusted"
import WhyUs from "./whyUs/Why"




export default function Homepage(){

    return (
        <>  
            <div className="main">


                    <Navbar/>
                    <Intro/>
                    <WhyUs/>
                    {/* <Trusted/> */}
                    <About/>
                {/* <h1>trusted</h1> */}
                <h1>about</h1>
                

                    <h1>second page</h1>
                    <h1>whats offered</h1>
                    <h1>third page</h1>
                    <h1>about the owners</h1>
                    <h1>fourth page</h1>
                    <h1>contact us</h1>
                {/* more stuff */}
                {/* contact */}
                {/* funzone info */}

            
            </div>
        </>
    )
}