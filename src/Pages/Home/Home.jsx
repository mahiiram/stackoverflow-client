import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../Components/RightSidebar/RightSiebar'
import HomeMainbar from '../../Components/HomeMainbar/HomeMainbar'
import '../../App.css'

export default function Home(){

    return(
        <div className="home-container-1">
            <LeftSidebar/>
            <div className="home-container-2">
               <HomeMainbar/>
               <RightSidebar/>
            </div>
        </div>
    )
}