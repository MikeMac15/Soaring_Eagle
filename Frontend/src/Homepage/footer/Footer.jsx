import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterDiv = styled.div`
background:  #e8a623;
// rgba(245, 195, 103)

display: flex;


padding: 4rem 0;

@media (max-width: 340px){
    
}
`
const Fsec1 = styled.div`
// height: 20rem;

flex-basis: 40%;

display:flex;
flex-direction: column;
align-items: center;



@media (max-width: 1000px){
    padding-left: 0rem;
}


`
const F2n3 = styled.div`
flex-basis: 60%;
display: flex;
justify-content: space-evenly;

@media (max-width: 450px){
flex-direction: column;
justify-content: center;
padding-left: 3rem;
}
`
const Fsec2 = styled.div`
// flex-basis: 25%;

display: flex;
flex-direction: column;

@media (max-width: 450px){
    padding-bottom: 2rem;
}
`
const Fsec3 = styled.div`
padding-left: 1rem;
padding-right: 2rem;

@media (max-width: 550px){
    padding: 0;
    }
`
const FtermsDiv = styled.div`

`
///////////////////////// Text settings
const Footerh3 = styled.h3`
color: white;
// font-size: 1rem;
margin-bottom: 1rem;
`
const Footerh4 = styled.h4`
color: white;
// font-size: 1rem;
margin-bottom: 5px;

@media (max-width: 340px){
    font-size:.75rem;
}
`
const Footerh5 = styled.h5`
color: white;
// font-size: 1rem;
margin-bottom: 5px;

`



///////////////////////// Left footer
const FLogo = styled.img`
height: 100px;
width: 150px;
`
const SEtitle = styled.h2`
color: white;
padding-bottom: 1rem;
padding-left:1rem;
text-align: center;


`

///////////////////////// Mid footer
const F_Links = styled(Link)`
padding-bottom: .1rem ;

`
///////////////////////// Right footer
/////////////////////////

export default function Footer() {

    return(
<>
        <FooterDiv>
            <Fsec1>
                <SEtitle>Soaring Eagle Educational Center</SEtitle>
                <FLogo src="/NavPics/SEED.png"  />
                <Footerh5>475 S Meyers St </Footerh5>
                <Footerh5> Kettle Falls, WA 99141</Footerh5>
            </Fsec1>

        <F2n3>

            <Fsec2>
                <Footerh3>Quick Links</Footerh3>
                <F_Links>Services</F_Links>
                <F_Links>Pricing</F_Links>
                <F_Links>About</F_Links>
                <F_Links>FunZone</F_Links>
            </Fsec2>

            <Fsec3>
                <Footerh3>Connect</Footerh3>
                <Footerh5>Phone:</Footerh5>
                <Footerh4>(509) 738-9129</Footerh4>
                <Footerh5>Email:</Footerh5>
                <Footerh4> contact@seecntr.org</Footerh4>
                <F_Links>Message us</F_Links>
                <i className='bx bxl-facebook-circle'></i>
                <i className='bx bxl-instagram-alt'></i>
            </Fsec3>
        </F2n3>

        </FooterDiv>
</>
    )
}