import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../Components/RightSidebar/RightSiebar";
import QuestionDetails from "./QuestionDetails";

export default function DisplayQuestion(){
    return (
        <div className="home-container-1">
        <LeftSidebar/>
        <div className="home-container-2">
            <QuestionDetails/>
            <RightSidebar/>
        </div>
    </div>
    )
}