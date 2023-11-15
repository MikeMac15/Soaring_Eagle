import styled from "styled-components"

// Divs

export const SpaceScreenDiv = styled.div`
    display: flex;
`

export const ApodTitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    
    padding: 1rem;
`
export const SpaceImgDiv = styled.div`

`
export const SpaceDescription = styled.div`
display: flex;
flex-direction: column;
`
export const SpaceFavorites = styled.div`
color:whitesmoke;
`

// Title UI

export const PicTitle = styled.h1`
color: white;
font-size: 50px;
text-align: center;

background-color: rgba(128, 128, 128, 0.285);
border-radius: 1rem;
padding: 1rem 2rem;
margin-bottom: 1rem;
`
export const DateInput = styled.input`
width: 18rem;
font-size: 2rem;
color: white;
background-color: rgba(128, 128, 128, 0.285);
border: none;
border-radius: 1rem;
`

// Image

export const NASAimg = styled.img`
// width: 1024px;
// height: 670px;
width: 2048px;
height: 1340px;  
border: none;
border-radius: 20px;
background: #000000;
`

// Decription

export const DescFavTitle = styled.h2`
color: whitesmoke;
text-align: center;
background-color: rgba(128, 128, 128, 0.285);
border-radius: 20px;
padding: 0.5rem 0;
margin-bottom: 0.5rem;

width: 30rem;

&.fav{
    width: 20rem;
}
`
export const Description = styled.p`
color: whitesmoke;
width: 30rem;
background-color: rgba(128, 128, 128, 0.285);
border-radius: 20px;
padding: 1rem 2rem;

text-indent: 1rem;
`
export const Copyright = styled.h2`
color: whitesmoke;
text-align: center;
background-color: rgba(128, 128, 128, 0.285);
border-radius: 20px;
padding: 15px;
width: 30rem;
margin-top: 0.5rem;
`

// Favorites

export const SaveBtn = styled.button`
background-color: rgba(128, 128, 128, 0.285);
border: none;
border-radius: 20px;
color: white;
padding: 10px;
`
export const SpaceUL = styled.ul`
color: whitesmoke;
width: 20rem;
background-color: rgba(128, 128, 128, 0.285);
border-radius: 20px;
padding-left: 15%;
`
export const SpaceLI = styled.li`
// margin-left: 1rem;
padding: 5px;
margin-top: 10px;
`
export const DeleteBtn = styled.button`
background: rgba(255, 41, 41, 0.235);
border: none;
border-radius: 2rem;
margin-left: 2rem;
padding: .25rem .5rem;

&:hover{
    background: red;
    color:whitesmoke;
}
`

