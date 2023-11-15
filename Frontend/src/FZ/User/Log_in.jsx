import { Link, useNavigate } from 'react-router-dom';

import { useState, useContext } from 'react';
import { userContext } from "../AppFZ";
import { api } from "../utils";
import styled from "styled-components";
import { useEffect } from 'react';

const LiHeader = styled.div`
height: 7rem;

background: black;
`;

const LiBase = styled.div`
background-image: url('/FunzonePics/chalk.jpeg');
background-repeat: no-repeat;
background-size: 100% 100%;
// transform: rotate(deg);


height: 92.55vh;

display:flex;
flex-direction: column;
// justify-content: center;
align-items: center;

`;

const LiBox = styled.div`
height: 30rem;
width: 30rem;
margin-top: 3rem;

background: #100e0eb2;
box-shadow: 10px 10px 10px 1px #1f202190;
border-radius: 2rem;

display:flex;
flex-direction: column;

align-items: center;

color: white;

`;

const Lih2 = styled.h2`
padding:2rem;
text-shadow: #000 1px 0px 4px;
font-size: 2rem;

margin-top: 4rem;
`;

const Lih5 = styled.h5`
padding-top:1rem;

font-size: 1rem;
text-shadow: #23272e 5px 3px 5px;
`;

const Lih6 = styled.h6`
text-shadow: #23272e 5px 3px 5px;
// margin-bottom: 2rem;
font-size: 1rem;
`;

const LiBtn = styled.button`
border: none;
    background: transparent;
    padding: 4px 16px;
    font-size: 1.1rem;
    color: white;
    background: rgba(199, 118, 246, 0.719);   /* rgb(0,212,212) */
    border-radius: 5px;
    transition: 0.2s all ease-out;
    cursor: pointer;

    margin-top: 1.6rem;
    margin-bottom: 15px;
    
    &:hover {
        border: #c776f6b7 1px solid;
        box-shadow: 1px 5px 30px 1px #e8c0ffb7;
        background: whitesmoke;
        color: purple;
    }
`;

const LIInput = styled.input`
    color: purple;
`

const LIForm = styled.form`
    // background: white;
    display: flex;
    flex-direction: column;
    width:  60%;
`

const LILink = styled(Link)`
    padding-left: 5px;
    color: skyblue;

    &:hover {
        
        text-shadow: skyblue 0px 0px 10px;
        
        color: white;
    }
`
export const Log_in = () => {
    const {user, setUser} = useContext(userContext);
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    
    
    const userLogIn = async(e) => {
        e.preventDefault();
        console.log('username', username);
        console.log('password', password);
        let response = await api.post("user/login/", {
            username: username,
            password: password
        });
        let user = response.data.user;
        let token = response.data.token;
        setUser(user);
        localStorage.setItem('Token', token);
        api.defaults.headers.common["Authorization"] = `Token ${token}`
        
    }

    useEffect(() => {
        user
         ? navigate('/funzone/homeroom/')
         : setTimeout(()=>{setIsLoading(false)}, 100)
    }, [user])
   
    return (
        <>
            { isLoading
            ? <></>
            :
            <LiBase>
                <LiBox>
                    <Lih2>Welcome to the FunZone!</Lih2>
                    <Lih6>New user?<LILink to='/signup'>Sign up</LILink></Lih6>

                    <LIForm onSubmit={(e) => userLogIn(e)}>
                        <Lih5>username</Lih5>
                        <LIInput type="text" placeholder='fun@gmail.com' required onChange={(e) => setusername(e.target.value)}/>

                        <Lih5>Password</Lih5>
                        <LIInput type="password" placeholder='*******' required onChange={(e) => setPassword(e.target.value)}/>

                        <LiBtn>Log In</LiBtn>
                    </LIForm>
                </LiBox>
            </LiBase>
            }
        </>
    )
}