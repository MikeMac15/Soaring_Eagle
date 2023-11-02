import styled from "styled-components";
import { useState, useRef } from "react";

const FullEmailerDiv = styled.div`
    display: flex;
    justify-content: center;

    padding: 2.5rem 3rem;


    @media (max-width: 820px){
        flex-direction: column;
    }
    @media (max-width: 450px){
        padding: 1rem 0.5rem;
    }
    
`

const MeatLeft = styled.div`
    flex-basis: 60%;
    padding: 40px 60px;
    background: #fff;
    color: rgb(239, 183, 111);
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;

   
    box-shadow: -10px 5px 30px 10px rgba(158, 76, 0, 0.404);


    @media (max-width: 820px){
        
        border-bottom-left-radius: 0;
        border-top-right-radius: 2rem;
        border-top-left-radius: 2rem;
    }
    @media (max-width: 500px){
        padding: 20px 30px;

    }
`

const PotatoesRight = styled.div`
    border-top-right-radius: 24px;
    border-bottom-right-radius: 24px;
    flex-basis: 40%;
    padding: 40px 40px;
    background: rgb(239, 183, 111);
    color: #fff;


    
    box-shadow: 10px 5px 30px 10px rgba(158, 76, 0, 0.404);


    @media (max-width: 820px){
        // padding: 1rem 3rem;
        border-top-right-radius: 0;
        border-bottom-right-radius: 2rem;
        border-bottom-left-radius: 2rem;

        box-shadow: -10px 10px 30px 10px rgba(158, 76, 0, 0.404);

        
    }
    @media (max-width: 375px){
        padding: 40px 20px;
    }
`

const ContactTitle = styled.div`
    font-size: 2rem;
    padding-bottom: 1rem;

    @media (max-width: 450px){
    font-size: 1.5rem;
    }
`
const TextLabel = styled.label`
    margin-bottom: 6px;
    display: block; 
`
const StyledInput = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
    padding-bottom: 5px;
`
const InputRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;

    @media (max-width: 450px){
        flex-direction: column;
    }
`
const InputGroup = styled.div`
    flex-basis: 40%;
`
const TextArea = styled.textarea`
    width: 100%;
    border: 1px solid #ccc;
    outline:none;
    padding:10px;
    box-sizing: border-box;
`
const StyledButton = styled.button`
    background: #ff9000ad;
    width: 100px;
    border: none;
    outline: none;
    color:white;
    height: 35px;
    border-radius: 30px;
    margin-top: 20px;
    box-shadow: 0px 5px 15px 0px rgba(158, 76, 0, 0.804);

    &:hover{
        background: white;
        color:#ff9000ad;
        box-shadow: 0px 5px 15px 0px rgba(158, 76, 0, 0.804);   
    }
`

const StyledTable = styled.table`
@media (min-width: 820px){



tr td:first-child{
    padding-right: 20px;
}

tr td{
    padding-top: 20px;
}

a {
    text-decoration: underline;
    color: #38a0fb;
    text-decoration-color: #38a0fb;
}
}
`

const Divider = styled.div`
    width: 12px;
    background-color: #cccccc;

    @media (max-width: 820px){
        width: 100%;
        height: 12px;
    }

`


export default function Emailer() {
    const [success, setSuccess] = useState(null)
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_zp94zsn', 'template_jw6q8gd', form.current, 'zB32I6I3ggkV8vlA2')
          .then((result) => {
              console.log(result.text);
              setShow(true)
              setSuccess(true)
          }, (error) => {
              console.log(error.text);
              setSuccess(false)
          });
      };


    return (

        <FullEmailerDiv>

                
                    <MeatLeft>

                        <ContactTitle>Send us a message.</ContactTitle>
                        <form ref={form} onSubmit={sendEmail}>
                            <InputRow>
                                <InputGroup>
                                    <TextLabel>*Name</TextLabel>
                                    <StyledInput required type="text" name="parent_name"/> {/* /// */}
                                </InputGroup>
                                <InputGroup>
                                    <TextLabel>*Phone</TextLabel>
                                    <StyledInput required type="text" name="phone"/>  {/* /// */}
                                </InputGroup>
                            </InputRow>
                            <InputRow>
                                <InputGroup>
                                    <TextLabel>*Email</TextLabel> 
                                    <StyledInput required type="email" name="email"/>  {/* /// */}
                                </InputGroup>
                                <InputGroup>
                                    <TextLabel>Students name</TextLabel> 
                                    <StyledInput type="text" name="child_name"/>  {/* /// */}
                                </InputGroup>
                            </InputRow>
                            <TextLabel>*Message</TextLabel>
                            <TextArea required rows="5" placeholder="Your message here." name="message"></TextArea>  {/* /// */}
                            <StyledButton type='submit'  id="btn">Send</StyledButton>
                        </form>
                    </MeatLeft>

                    <Divider/>

                    <PotatoesRight>
                        
                        <ContactTitle>Reach us. </ContactTitle>
                            
                            <StyledTable>
                                <tbody>

                                <tr>
                                    <td>Email:</td>
                                    <td>contact@seecntr.org</td>
                                </tr>
                                <tr>
                                    <td>Phone:</td>
                                    <td>( 509 ) 738-9129</td>
                                </tr>
                                <tr>
                                    <td>Address:</td>
                                    <td>475 S Meyers St
                                        Kettle Falls, WA 99141</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>

                                            Please visit our Facebook page {' '} 
                                            
                                            <a href="https://www.facebook.com/SoaringEagleEdCenter" target="_blank">SoaringEagleEdCenter</a>

                                        </td>
                                    </tr>
                                </tbody>
                            </StyledTable>
                        


                    </PotatoesRight>
                
            
       
        </FullEmailerDiv>
    
    )
}