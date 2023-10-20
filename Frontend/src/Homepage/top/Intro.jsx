import styled from "styled-components"

const Banner = styled.div`
background: #c93d38;
color: antiquewhite;
text-align: center;
padding:.25rem;
`
const FullIntro = styled.div`
display: flex;
background: black;
`
const Leftdiv = styled.div`
background: #18324a;
width: 35rem;

@media (max-width: 1100px){
    width:0rem;
}
@media (max-width: 600px){
    width:0rem;
}
`
const IntroDiv = styled.div`
    background-image:
        linear-gradient(to bottom, rgba(196, 163, 53,0.3), transparent),
        url('./HomePics/grad.jpeg');
   
    width: 100%;
    height: 30rem;
    background-size: 100% 100%;
    color: white;
    

    display: flex;
    flex-direction: row;
    
    @media (max-width: 1100px){
        height:30rem;
    }
    @media (max-width: 900px){
        height: 25rem;
    }
`
const TextDiv = styled.div`
background: linear-gradient(to right,#18324a, transparent);
width:100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const IntroP = styled.p`
z-index:1;
transform: translate(-500px);
font-size: 2rem;
color: whitesmoke;
text-align: center;
width: 60%;
margin-bottom: 2rem;
@media (max-width: 1100px){
    font-size: 2rem;
    transform: translate(-200px);
    margin-bottom: 1rem;
}
@media (max-width: 900px){
    width:50%;
}
@media (max-width: 800px){
    font-size:1.75rem;
    transform: translate(-150px);
}
@media (max-width: 600px){
    font-size: 1.5rem;
    transform: translate(0px);
}
`
const Introp = styled.p`
transform: translate(-500px);
font-size: 1rem;
color: whitesmoke;
text-align: center;
width: 60%;
@media (max-width: 1100px){
    font-size: 1rem;
    transform: translate(-200px);
    width:40%;
}
@media (max-width: 900px){
    width:50%;
}
@media (max-width: 800px){
    transform: translate(-150px);
}
@media (max-width: 600px){
    font-size: 1rem;
    transform: translate(0px);
}
`


export default function Intro(){

    return (
        <>
        <Banner>Contact us today!</Banner>
            <FullIntro>

            <Leftdiv>.</Leftdiv>
            <IntroDiv>
                <TextDiv>
                
                <IntroP>Elevate your child's educational experience with Soaring Eagle Educational Center!</IntroP>
                <Introp>
                    Our mission is to empower students to excel academically, boost their self-assurance, and sustain their academic success.
                </Introp>
                </TextDiv>
            </IntroDiv>
            </FullIntro>
        </>
    )
}