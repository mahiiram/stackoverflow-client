import './User.css'
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import { useLocation } from 'react-router-dom';
import UsersList from './UsersList';

export default function Users(){


const location = useLocation()
console.log(location)


    return(
        <div className='home-container-1'>
        <LeftSidebar/>
        <div className="home-container-2" style={{marginTop:"40px"}}>
            <h1 style={{fontWeight:'400'}}>Users</h1>
             
                <UsersList/> 
                
             
        </div>
        </div>
    )
}