import React, {useState, useEffect, useContext} from "react";
import { userContext } from "../AppFZ";
import { Float, Environment, PresentationControls, Html, Stars, useGLTF} from "@react-three/drei";
// import NasaApi from "./NasaApi";
import { api } from "../utils";
import { ApodTitleDiv, Copyright, DateInput, Description, DescFavTitle, NASAimg, PicTitle, SpaceDescription, SpaceFavorites, SpaceImgDiv, SaveBtn, SpaceUL, SpaceLI, DeleteBtn } from "../Styled/NASAstyle";

export const NASAAPIPage = () => {
    ////////////////////NASA API////////////////////////////
    const [APOD,setAPOD] = useState(null);
    const [Dzoom, setDzoom] = useState(false)
    const [imgZoom, setImgZoom] = useState(false)
    const [bigZoom, setBigZoom] = useState(false)
    document.addEventListener('keydown', (event) => {
        if (event.key === ' ') {
          setBigZoom(!bigZoom)
        }
      });
    const [dateIn, setDateIn] = useState('2023-08-02')
    
    const [picTitle, setPicTitle] = useState();
    const [picDescription, setPicDescription] = useState();
    const [picUrl, setPicUrl] = useState();
    const [picCopyright, setPicCopyright] = useState();

    

    async function getFetch(dateIn) {
        const url = 'https://api.nasa.gov/planetary/apod?api_key=';
        const key = 'AYHHmYlM0FOTQ9WzG7J7zSSFK6POd66I3RgrUewq';
        const dP = '&date='
        const send = `${url+key+dP+dateIn}`;
        try {
            const data = await fetch(send);
            const APODData = await data.json();
            // console.log(APODData)
            setAPOD(APODData);
            setPicCopyright(APODData.copyright)
            setPicDescription(APODData.explanation)
            setPicUrl(APODData.hdurl)
            setPicTitle(APODData.title)
        } catch (err) {
            console.error("Error fetching data", err);
        }
}

useEffect(()=> {
    getFetch(dateIn)
    // console.log(dateIn)
},[dateIn])

    const token = localStorage.getItem('Token');
    
    //////////////////////////MY API////////////////////////
    const {user} = useContext(userContext);
    const [favoritePics, setFavoritePics] = useState();


    const fetchFavorites = async() => {
        try{
            
            if(!token){
                console.error('no token found');
                return;
            }
            api.defaults.headers.common["Authorization"] = `Token ${token}`

            let response = await api.get('favpics/favlist/')
            
            // console.log('myapi',response.data)
            setFavoritePics(response.data)
        } catch (err) {
            console.error('Error fetching Favorites.', err)
        }
    }

    const accessFav = (index) => {
        // sets
        setPicCopyright(favoritePics[index].copyright)
        setPicDescription(favoritePics[index].explanation)
        setPicUrl(favoritePics[index].hdurl)
        setPicTitle(favoritePics[index].title)
    }

    const deleteFavPic = async (index) => {
        try {
            if (!token) {
                console.error('No token found');
                return null;
            }
            api.defaults.headers.common["Authorization"] = `Token ${token}`;
    
            let response = await api.delete(`favpics/favlist/${index}/`);
    
            if (response.status === 204) {
                // console.log('Item deleted successfully.');
                fetchFavorites()
            } else {
                console.error('Failed to delete item.');
                console.error('Response status:', response.status);
                console.error('Response data:', response.data);
            }
        } catch (err) {
            console.error('Error deleting Favorites.', err);
        }
    };

    const saveFavPic = async () => {
       try{
        api.defaults.headers.common["Authorization"] = `Token ${token}`;
        let response = await api.post("favpics/favlist/", {
            copyright: picCopyright,
            date: APOD.date,
            explanation: picDescription,
            hdurl: picUrl,
            title: picTitle
        })
        if (response.status === 201) {
            // console.log('Item created successfully.');
            fetchFavorites()
        } else {
            console.error('Failed to add item.');
            console.error('Response status:', response.status);
            console.error('Response data:', response.data);
        }
    } catch (err) {
        console.error('Error creating Favorites.', err);
    }
    }

    useEffect(()=>{
        fetchFavorites()
    },[])

    
// console.log('st',favoritePics.date)

    /////////////////////////Model/////////////////////////
   const macbook = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
    
    return (
        <>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                {/* environment */}
            <color args={ ['#000'] } attach='background' /> {/* ////takeout eventually */}
           
            {/* SEED Floating Text */}
                    {/* Ground */}
            <Environment preset="night" />
            
            <PresentationControls rotation={ [ 0.13, 0.2, 0 ] }>
                <Float floatIntensity={Dzoom  ? 0 : 0.2} rotationIntensity={Dzoom  ? 0 : 0.2}>
                    <primitive
                        object={ macbook.scene }
                        position-y={ - 1.2 }
                        rotation-x={ 0.13 }
                        >
                                                {/* TITLE */}
                        <Html 
                            transform
                            distanceFactor={ 1.17 }
                            position={ [ 0, 2.9, - 1.7 ] }
                            rotation-x={ - 0.256 }
                        >
                            <ApodTitleDiv>
                                {APOD && <PicTitle>{picTitle}</PicTitle>}
                                <DateInput type="date"  onChange={(e)=> setDateIn(e.target.value)}/>
                            </ApodTitleDiv>
                        </Html>
                                                {/* IMAGE */}
                        <Html 
                            transform
                            distanceFactor={ bigZoom ? 2 : imgZoom ? 1.2 : 0.605  }
                            position={ [  0, imgZoom ? 1.3 : 1.56, bigZoom ? 0  : imgZoom ? 0 :  -1.4 ] }
                            rotation-x={ - 0.256 }
                            >
                            {APOD && (
                        <SpaceImgDiv onClick={() => setImgZoom(!imgZoom)}>
                            <NASAimg src={picUrl} alt={picTitle} />
                        </SpaceImgDiv>)}
                        </Html>
                                            {/* Description */}
                        <Html 
                            transform
                            distanceFactor={!Dzoom ? 1.17 : 2 }
                            position={ [ (!Dzoom ? 2.5 : 3), 1.56, (!Dzoom ? -1.4 : -0.5) ] }
                            rotation-x={- 0.256 }
                            rotation-y={!Dzoom ? 0 : -0.5}
                        >
                            {APOD && (
                            <SpaceDescription onClick={() => setDzoom(!Dzoom)}>
                                <DescFavTitle>Description</DescFavTitle>
                                <Description>{picDescription}</Description>
                                {APOD.copyright && 
                                (<Copyright>Credit: {APOD.copyright}</Copyright>)} 
                            </SpaceDescription>
                               
                            )}    
                                
                        </Html> 
                                        {/* Favorite Pictures */}
                        <Html 
                            transform
                            distanceFactor={ 1.17 }
                            position={ [  -2, 1.56, -0.5 ] }
                            rotation-x={- 0.256 }
                            rotation-y={0.2}>
                            {APOD && (
                            <SpaceFavorites onClick={() => console.log('favClick')}>
                                <DescFavTitle className="fav">Favorites</DescFavTitle>
                                <SaveBtn onClick={() => saveFavPic()}>{'Save'}</SaveBtn>
                                <SpaceUL>
                                    {favoritePics
                                    ?
                                        favoritePics.map((pic, index)=>(
                                            <SpaceLI key={index} onClick={()=> accessFav(index)}>
                                                {pic.date}
                                                <DeleteBtn onClick={() => deleteFavPic(pic.id)}>Delete</DeleteBtn>
                                            </SpaceLI>
                                        ))
                                    :   <SpaceLI>View saved pictures here</SpaceLI>
                                        
                                    }
                                </SpaceUL>
                            </SpaceFavorites>
                            )}    
                        </Html>
                    </primitive>                    
                </Float>

            </PresentationControls>
        </>
    )
}

export default NASAAPIPage;