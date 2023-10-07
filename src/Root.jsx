import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import Questions from './Pages/Question/Question'
import AskQuestion from './Pages/AskQuestion/AskQuestion'
import DisplayQuestion from './Pages/Question/DisplayQuestion'
import Tags from './Pages/Tags/Tags'
import Users from './Pages/Users/Users'
import UserProfile from './Pages/UserProfile/UserProfile'


export default function Root(){
    return(
        <div>
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Auth' element={<Auth/>}/>
    <Route path='/Questions'element={<Questions/>}/>
    <Route path='/AskQuestion'element={<AskQuestion/>}/>
    <Route path='/Questions/:id' element={<DisplayQuestion/>}/>
    <Route path='/Tags' element={<Tags/>}/>
    <Route path='/Users' element={<Users/>}/>
    <Route path='/Users/:id' element={<UserProfile/>}/>
    
</Routes>
        </div>
    )
}