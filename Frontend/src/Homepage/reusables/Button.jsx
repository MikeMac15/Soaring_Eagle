import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const FullButton = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

const StyledText = styled.h3`
margin-bottom: 0.5rem;

`

const StyledButton = styled.div`
background: antiquewhite;
border-radius: 2rem;
// color: whitesmoke;
padding:0.5rem;
width: 11rem;

text-align: center;

display: flex;
align-items: center;

box-shadow: 2px 2px 10px 1px grey;

&:hover {
    /* Add your hover styles here */
    background-color: #333; /* Change the background color on hover */
    color: white; /* Change the text color on hover */
    /* Add any other hover styles you want */
  }
`



export default function Button({label, page, text = ''}) {
    const navigate = useNavigate()
    
    const navTo = () => {
    navigate(page)
}

    return (
        <FullButton>
            <StyledText>{text}</StyledText>
            <StyledButton onClick={navTo}>{label}</StyledButton>
        </FullButton>
    )
}