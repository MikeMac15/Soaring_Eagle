import Navbar from "../Navbar/nav"




export default function Homepage(){

    return (
        <>


            <div id="everything">
                {/* <navbar/> */}
                
                {/* intro */}
                <section className="one">
                    <Navbar/>
                    <h1>first page</h1>
                </section>
                {/* trusted */}
                <section className="two">
                    <h1>second page</h1>
                </section>
                {/* about */}
                <section className="three">
                    <h1>third page</h1>
                </section>
                {/* whats offered */}
                <section className="four">
                    <h1>fourth page</h1>
                </section>
                {/* more stuff */}
                {/* contact */}
                {/* funzone info */}

            </div>
        </>
    )
}