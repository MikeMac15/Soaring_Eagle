import styled from "styled-components";
import Button from "../reusables/Button";
import PricingBtn from "../reusables/PricingLink";

const FullAbout = styled.div`
    // background-image: linear-gradient(#f9daa4, #fff);
    // background: #f9daa4;
    background-image: linear-gradient(antiquewhite, #d1b590);

   

    padding: 3rem 0;
    
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    @media (max-width: 700px){
        flex-direction: column;

    }
    
`
const AboutImg = styled.img`
    margin-top: 5vw;
    height: 50vw;
    width: 60vw;
    border-radius: 10px;
   opacity: 60%;
   position: absolute;
   transform: translate(-200px, -50px);
   @media (max-width: 800px){
    height: 100%;
    width: 100%;
    transform: translate(0px);
}
`
const AboutTextDiv = styled.div`
    width: 40vw;
    text-indent: 1rem;
    transform: translate(200px);
    text-shadow: .5px .5px 2px grey;
    @media (max-width: 1200px){
        width: 60vw;
        transform: translate(150px);
    }
    @media (max-width: 800px){
        width: 60vw;
        transform: translate(0px);
    }
`

export const StyledH2 = styled.h4`
    font-size: 50px;
    margin-bottom: 40px;
    padding: 0;
`
export const StyledP = styled.p`
    font-size: 20px;
    margin-bottom:2rem;
`

// FullAbout  AboutImg  AboutTextDiv
export const About = () => {

    return (
        <>
            <FullAbout>
                <AboutImg src="/NavPics/SeedLogo.png" alt="eagle pic" />
                <AboutTextDiv>
                    <StyledH2>About Us.</StyledH2>

                    <StyledP>Elevate your educational experience with Soaring Eagle Educational Center! Our mission is to empower students to excel academically, boost their self-assurance, and sustain their academic success.</StyledP>

                    <StyledP>At SEEC, we are led by a dynamic team of education experts, Brenda VanSlyke and Shelley Lawrence. With a combined experience of over six decades, Brenda has dedicated 34 years of her life to working with children, 17 of which have been spent in the field of education. Meanwhile, Shelley Lawrence brings her impressive 29 years of education experience, along with her credentials as an accomplished administrator, to the table.</StyledP>

                    <StyledP>When you choose Soaring Eagle Educational Center, you're selecting a pathway to enhanced learning, confidence, and academic achievement. Join us on this educational journey, where we believe in soaring to new heights!</StyledP>

                </AboutTextDiv>
                    <PricingBtn text={'Click here to learn more about our owners.'}/>
            </FullAbout>
        </>
    )
}
export default About;