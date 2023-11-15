import { Outlet, Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react';
import { api } from "./utils";
import { createContext } from 'react';
import styled from "styled-components";

// Funzone
// gameview
// spaceapi
// mathgame
const FZNav = styled.div`
  box-sizing: border-box;
  position: static;
  top: 0;
  left: 0;
  width: 100%;
  padding-left: 1vw;
  padding-right: 1vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgb(0, 0, 0);
`
const FZTitle = styled.div`
  margin-left: 4rem;

  
  span{
    font-size: 2rem;
    margin-left: 1rem;
  }
  span:nth-of-type(even){
    color:rgb(255, 173, 66);
}
  span:nth-of-type(odd){
    color: rgb(251, 113, 78);
}
`
const FZLinks = styled.div`
  &::before {
    content: '';
    position: absolute;
    display: flex;
    top: 100%;
    left: 0;
    width: 0%;
    height: 2px;
    /* background: #c06622a6; */
    background: #3b9c12a6;
    transition: .3s;
  }
  &:hover::before {
    width: 100%;
}
`
const StyledLink = styled(Link)`
  position: relative;
  font-size: 1rem;
  color: rgb(217, 134, 130);
  font-weight: 500;
  margin-left: 15px;
  margin-right: 15px;

  textDecoration: 'none';
`
const StyledImg = styled.img`
  margin-left: 3%;  
  height: 40px;
  width: 80px;
`
const StyledButton = styled.button`
`

export const userContext = createContext();
function AppFZ() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const style = {textDecoration: 'none'}

  const whoAmI = async() => {
    let token = localStorage.getItem("Token")
    if (token){
        api.defaults.headers.common["Authorization"] = `Token ${token}`
        let response = await api.get("user/info")
        setUser(response.data)
        
    } else {
        setUser(null)
        
    }
  }
  useEffect(() => {
        whoAmI()
    },[])

  const logOut = async() => {
    let response = await api.post('user/logout/')
    if (response.status == 204){
        localStorage.removeItem('token')
        setUser(null)
        delete api.defaults.headers.common["Authorization"]
        navigate('/funzone')
    }
  }

  return (
    <> 
      <FZNav>
        <FZTitle>

          <span>F</span>
          <span>u</span>
          <span>n </span>
          <span>Z</span>
          <span>o</span>
          <span>n</span>
          <span>e</span>

        </FZTitle>
        <StyledImg src="/NavPics/SoaringEagleLogo.png" alt="Logo"/>

        <FZLinks>
          <StyledLink to={'/'} style={style}>Ed Center Home</StyledLink>

        { user 
          ?
          <>
          <StyledLink to={'homeroom'} style={style}>Homeroom</StyledLink>
          <StyledButton onClick={logOut}>Log out</StyledButton>
          </>
          :
          <>
          <StyledLink to={'login'} style={style}>Login</StyledLink>
          <StyledLink to={'signup'} style={style}>SignUp</StyledLink>
          </>
        }


        </FZLinks>

      </FZNav>

      <userContext.Provider value={{user, setUser}}>
        <Outlet />
      </userContext.Provider>
    </>
  )
}

export default AppFZ