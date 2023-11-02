import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import Emailer from "./Emailer";




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
height: 20rem;
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
const ExtraDiv = styled.div`
background: white;
height: ${(props) => props.height}rem;
transition: ease 1.25s;
overflow: hidden;

@media (max-width: 820px){
    height: ${(props) => props.height * 1.4}rem;  
}
@media (max-width: 600px){
    height: ${(props) => props.height * 1.5}rem;  
}
`

export default function ContactBanner() {
    
    const [showEmailer, setShowEmailer] = useState(false)
    const [showInfoDiv, setShowInfoDiv] = useState(false)
   

    const facebook = () => {
        const facebooklink = 'https://www.facebook.com/SoaringEagleEdCenter'
        window.open(facebooklink, '_blank')
    }

    const showMessenger = () => {
        setShowEmailer(!showEmailer)
        
        setShowInfoDiv(false)
        console.log(showEmailer, showInfoDiv)
    }
    const showInfo = () => {
        setShowEmailer(false)
        setShowInfoDiv(!showInfoDiv)
    }

    useEffect(() => {

    }, [showEmailer,showInfoDiv])


    return(

        <>
            <FullCB>
                <CBText>Connect With Us Today!</CBText>

                <AllCards>
                    <Card color="skyblue" onClick={()=> facebook()}>
                        <Card1Background/>
                        <CardTitle>FaceBook</CardTitle>
                    </Card>
                    <Card color="brown" onClick={()=> showMessenger()}>
                        <Card2Background/>
                        <CardTitle>Send Us A Message</CardTitle>
                    </Card>
                    <Card color="green" onClick={()=> showInfo()}>
                        <Card3Background/>
                        <CardTitle>Our Info</CardTitle>
                    </Card>
                </AllCards>
            </FullCB>

            
                <ExtraDiv height={showEmailer ? 35 : 0}>
                
              
                    <Emailer/>
               
            
                </ExtraDiv>
              
            {
                showInfoDiv 
                ? 
                <>
                <h1>info</h1>
                </>
                : 
                <></>
            }
        </>
    )
}