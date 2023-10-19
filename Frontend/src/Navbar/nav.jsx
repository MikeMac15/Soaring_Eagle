import styled from 'styled-components'
import { Link } from 'react-router-dom'
import './nav.css'

const FullNav = styled.div`
    // height: 4rem;

    background: rgba(0,0,0,.1);
    backdrop-filter: blur(50px);

    display: flex;
    justify-content: space-evenly;

    @media (max-width: 800px) {
        flex-direction: row-reverse;
        
    }
    @media (max-width: 600px) {
        justify-content: space-around;
    }
`
const TitleNav = styled.div`
    display: flex;
    
    align-items: center;
    text-align: center;
`

const WebsiteName = styled.h1`
    color: antiquewhite;

    @media (max-width: 800px) {
        padding-right: 2rem;
    }
`

const ImgNav = styled.div`

`

const LogoNav = styled.img`
    height: 100px;
    width: 150px;


    @media (max-width: 800px) {
        height: 70px;
        width : 120px; 
    }
`
const LinksDiv = styled.div`
    display: flex;
    // justify-content: space-between;
    align-items: center;

    @media (max-width: 801px) { // Adjust the max-width as needed
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 0rem;
        overflow: hidden;
        
        background: rgba(0,0,0,.1);
        backdrop-filter: blur(50px);
        box-shadow: 0 .5rem 1rem rgba(0,0,0,.1);

        
        flex-direction: column;

        transition: .3s ease;

    }
    `
    
const StyledLink = styled(Link)`
    margin-left: 2rem;
    text-decoration: none;
    color: antiquewhite;

    @media (max-width: 800px) { 
        margin: 1.25rem 0;
        font-size: 1.25rem;
        
        #check:checked ~ .navLinks a {
            transform: translateY(0);
            transition-delay: calc(.15s * var(--i));
        }
        
    }
`
const DropdownBtn = styled.label`
    font-size: 3rem;
    color: antiquewhite;
    cursor: pointer;
    display: none;

    @media (max-width: 800px) {
        display: inline-flex;
        align-items: center;

        #check:checked~ #menu-down {
            display: none;
        }
        
    }
    @media (max-width: 600px) {
        padding-right: 1.5rem;
    }
`



export default function Navbar(){

    return (
        <>
            <FullNav>
                <input type="checkbox" id='check' />
                <DropdownBtn for='check'>
                    <i class='bx bx-menu' id='menu-down'></i>
                    <i class='bx bx-chevron-up' id='menu-up' ></i>
                </DropdownBtn>
                {/* title */}
                <TitleNav>
                    <WebsiteName>
                        Soaring Eagle Ed Center 
                    </WebsiteName>
                </TitleNav>
                {/* img */}
                <ImgNav>
                    <LogoNav src='./NavPics/SeedLogo.png' alt='logo'/>
                </ImgNav>
                {/* links */}
                <LinksDiv className='navLinks'>
                    <StyledLink>About</StyledLink>
                    <StyledLink>Services</StyledLink>
                    <StyledLink>Contact</StyledLink>
                    <StyledLink>Funzone</StyledLink>
                </LinksDiv>


                
            </FullNav>
        </>
    )
}