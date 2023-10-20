import styled from 'styled-components';

const FullTrust = styled.div`
    height: 8rem;
    
    display: flex;
    justify-content: center;
    align-items: baseline;

    background-color: white;  
    
    
    @media (max-width: 500px){
        height:5.5rem;
    }
`
const TrustImgDiv = styled.div`
    display: flex;
    justify-items: space-evenly;
`
const TrustedImg = styled.img`
    height: 100px;
    width: 100px;
    margin-left: 5vw;
    margin-top: 1rem;

    @media (max-width: 800px){
        height: 75px;
        width: 75px; 
        margin-top: 1.5rem;
    }
    @media (max-width: 500px){
        height: 50px;
        width: 50px; 
        margin-top: 1rem;
    }
`
// FullTrust    TrustImgDiv      TrustedImg
export const Trusted = () => {

    return(
        <>
            <FullTrust>
                <h3>Trusted by:</h3>
                <TrustImgDiv>

                    <TrustedImg src="/trusted/Inchelium.png" alt="inchelium" />
                    <TrustedImg src="/trusted/kfsd.jpeg" alt="kf" />
                    <TrustedImg src="/trusted/csd.png" alt="c" />
                    <TrustedImg src="/trusted/WASBE.svg" alt="wa" />
                    
                </TrustImgDiv>
            </FullTrust>
        </>
    )
};
export default Trusted;