import { Canvas } from "@react-three/fiber";
import NASAAPIPage from "./Scenes/NASAAPIPage";

export default function Spaceview(){

    return (
        <>
                                    {/* R3F */}
            <div style={{width: '100vw', height: '100vh', position: "fixed"}} >
                <Canvas camera={{fov:75, position:[0,0,3]}}>
                    <NASAAPIPage />
                </Canvas>            
            </div>
                            
        </>
    )
}
