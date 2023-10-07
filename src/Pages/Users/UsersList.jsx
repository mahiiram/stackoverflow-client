import { useSelector } from "react-redux"
import User from './User'
import './User.css'

export default function UsersList(){

const users = useSelector((state)=>(state.usersReducer))



    return(
        <div className="userlist-container">
          {
            users.map((user)=>(
                <User user={user} key={user?._id}/>
            ))
          }
        </div>
    )
}