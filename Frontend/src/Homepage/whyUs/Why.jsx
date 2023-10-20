import styled from 'styled-components'


const FullDiv = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items:center;

padding: 3rem 0;

background: white;


`

const TitleDiv = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items:center;
text-shadow: 2px 2px 1px antiquewhite;
padding-bottom: 2rem;
`
const MidContainer = styled.div`
display:flex;
justify-content: center;
align-items:center;

@media(max-width:625px){
    flex-direction: column;
}
`
const WhyH3 = styled.h3`
    font-size:2rem;
    text-align: center;
`
const WhyP = styled.p`
    font-size:1.25rem;
    text-align: center;
    width: 85%;
    margin-top:.5rem;
`
const ListTitle = styled.ol`
list-style: decimal;
padding:0;
width:50%;
margin-left: 2rem;
padding-right: 2rem;

@media(max-width:400px){
    padding:0;
}
`
const Listelem = styled.li`
font-size:1.5rem;
text-shadow: 2px 2px 1px antiquewhite;
`
const ListP = styled.p`
margin-left:2rem;
`
const WhyImg = styled.img`
height:400px;
width:700px;
@media(max-width:1000px){
    height:300px;
    width:600px;
}
@media(max-width:850px){
    height:200px;
    width:400px;
}
@media(max-width:400px){
    height:200px;
    width:300px;
}
`
export default function WhyUs(){

    return (
        <>
        <FullDiv>
            <TitleDiv>

                <WhyH3>Why Choose Soaring Eagle Ed Center:</WhyH3>
                <WhyP>We understand that guiding your child to catch up or excel in their studies can be a challenging endeavor. That's where we come in.</WhyP>
            </TitleDiv>
            <MidContainer>
                <WhyImg src='/HomePics/connect.png' />
                <ListTitle>
                    <Listelem>Personalized Support:</Listelem>
                    <ListP>Our experienced team, led by Brenda and Shelly, offers one-on-one, in-person educational assistance tailored to your child's specific needs.</ListP>
                    <Listelem>Trusted Guidance:</Listelem>
                    <ListP>With 51 years of combined experience, Brenda's 34 years and Shelley's 17 years in education, you can rely on their expertise and dedication to fostering academic success.</ListP>
                    <Listelem>Administrative Excellence:</Listelem>
                    <ListP>Shelley, with 29 years of experience and administrative credentials, ensures that our educational programs are meticulously designed to meet your child's unique educational requirements.</ListP>
                </ListTitle>
            </MidContainer>
        </FullDiv>
        </>
    )
}
