import { Canvas } from "@react-three/fiber";
import { SchoolRoom } from "./Scenes/SchoolRoom";
import SRextras from "./Scenes/SRextras";

export default function Gameview(){

    return (<>
            <div style={{width: '100vw', height: '100vh', position: "fixed"}} >
                <Canvas camera={{fov:75, position:[0.2,1,1]}}>
                    <SRextras />
                    <SchoolRoom  />
                </Canvas>            
            </div>
    </>)
}