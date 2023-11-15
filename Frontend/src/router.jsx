import {createBrowserRouter} from 'react-router-dom';
import App from './App';
import Homepage from './Homepage/Homepage'
import AppFZ from './FZ/AppFZ';
import Gameview from './FZ/Gameview';
import Spaceview from './FZ/Spaceview';
import { Log_in } from './FZ/User/Log_in';
import Sign_up from './FZ/User/Sign_up';
import MathPage2 from './FZ/Scenes/MathPage/MathPage2';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Homepage />
            }
        ]
    },
    {
        path: '/funzone/',
        element: <AppFZ />,
        children: [
            {
                index: true,
                element: <Log_in />
            },
            {
                path: 'signup',
                element: <Sign_up />
            },
            {
                path: 'homeroom',
                element: <Gameview />
            },
            {
                path: 'outerspace',
                element: <Spaceview />
            }
        ]
    },
    {
        path:'/mathPage',
        element: <MathPage2 />, // take out//// example page only
    },

])