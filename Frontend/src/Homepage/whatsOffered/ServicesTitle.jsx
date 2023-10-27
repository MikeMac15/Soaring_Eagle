import styled from "styled-components";

const Div = styled.div`
    height: 100px;
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    padding: 0 100px;

    opacity: 0;

    &.visible{
        opacity: 1;
      }
`

const H2 = styled.h2`
    height: 60px;
    font-size: 25px;
    position: relative;
    /* text-transform: uppercase; */
    margin: 20px;
    padding: 10px 40px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;


    padding: 10px 40px;
    color: #0f2027;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before,
    ::after {
        content: "";
        position: absolute;
        display: block; 
    }

    &:before {
        height: 100%;
        width: 0;
        right: 0;
        border-top: 2px solid #ffc861;
        border-bottom: 2px solid #ffc861;
        transition: all 500ms cubic-bezier(0.075, 0.81, 0.165, 1);
      }

    &:after {
        background-color: transparent;
        height: calc(100% - 4px);
        width: 0;
        left: 0;
        transition: all 1s cubic-bezier(0.075, 0.81, 0.165, 1);
      }
      

      &:hover:before {
        width: 100%;
      }
      
      &:hover:after {
        width: 100%;
        background-color: #ffebb5c1;
        border-radius: 4px;
      }

      
`

export default function ServicesTitle(){

    return(
        <>
            <Div>
                <H2>Services We Have To Offer.</H2>
            </Div>
        </>
    )
}