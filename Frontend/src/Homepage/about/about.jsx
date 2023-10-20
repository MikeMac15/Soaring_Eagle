import styled from "styled-components";

const FullAbout = styled.div`
    background-image: linear-gradient(#f9daa4, #fff);
    padding-top: 3rem;
    margin-bottom: 150px;
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
    height: 40vw;
    width: 50vw;
    border-radius: 10px;
   
`
const AboutTextDiv = styled.div`
    width: 40vw;
    text-indent: 1rem;
    @media (max-width: 700px){
        width: 80vw;
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
            </FullAbout>
        </>
    )
}
export default About;