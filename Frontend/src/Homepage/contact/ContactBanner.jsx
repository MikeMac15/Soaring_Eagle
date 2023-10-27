import styled from "styled-components";


const FullCB = styled.div`
background: rgba(20,20,20, .6);

// height: 25rem;
`

const CBText = styled.h3`
color: black;
font-size: 2rem;
text-shadow: 1px 1px 5px rgb(150,150,150);
text-align: center;
padding-top: 2rem;
`

const AllCards = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;

padding: 2rem 0;
`

const Card = styled.div`
height: 15rem;
width: 15rem;
// background: black;


display: flex;
justify-content: center;
align-items: center;

border-radius: 2rem;

overflow: hidden;

&:hover {
    box-shadow: 5px 5px 30px 10px white;
    color: ${props => props.color};
}

`
const Card1Background = styled.div`
height: 100%;
width: 100%;

// position: inherit;

background-image: url('/contactPics/facebook.png');
background-size: 100% 100%;

filter: blur(50px);

transition: ease 1s;

&:hover{
    filter: blur(2px);  
}
`

const Card2Background = styled.div`
height: 100%;
width: 100%;

// position: inherit;

background-image: url('/contactPics/contact.png');
background-size: 100% 100%;

filter: blur(50px);

transition: ease 1s;

&:hover{
    filter: blur(1px);  
}
`
const Card3Background = styled.div`
height: 100%;
width: 100%;

// position: inherit;

background-image: url('/contactPics/IMG_3194.jpeg');
background-size: 100% 100%;

filter: blur(50px);

transition: ease 1s;

&:hover{
    filter: blur(1px);  
}
`

const CardTitle = styled.h4`
position: absolute;
text-align: center;
// color: whitesmoke;
font-size: 1.25rem;
// background: white;
text-shadow: 0 0 1rem grey;

@media (max-width: 550px) {
    font-size: 1rem;
}
@media (max-width: 450px) {
    font-size: 0.75rem;
}
`

export default function ContactBanner() {

    return(

        <>
            <FullCB>
                <CBText>Get In Contact With Us Today!</CBText>

                <AllCards>
                    <Card color="skyblue">
                        <Card1Background/>
                        <CardTitle>FaceBook</CardTitle>
                    </Card>
                    <Card color="brown">
                        <Card2Background/>
                        <CardTitle>Send Us A Message</CardTitle>
                    </Card>
                    <Card color="green">
                        <Card3Background/>
                        <CardTitle>Our Info</CardTitle>
                    </Card>
                </AllCards>
            </FullCB>
        </>
    )
}