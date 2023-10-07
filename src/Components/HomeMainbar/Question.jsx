import { Link } from "react-router-dom";
import moment from "moment/moment";

export default function Question({question}){
    return(
        <div className="display-question-container">
            <div className="display-votes-ans">
            <p>{question.upVotes.length - question.downVotes.length}</p>
            <p>votes</p>
            </div>
           <div className="display-votes-ans">
            <p>{question.noOfAnswers}</p>
            <p>answers</p>
           </div>
           <div className="display-questions-details">
            <Link to={`/Questions/${question._id}`} className="question-title">{question.questionTitle}</Link>
            <div className="display-tags-time">
               <div className="display-tags">
                  {
                    question.questionTags.map((tag)=>(
                        <p key={tag}> {tag} </p>
                    ))
                  }
               </div>
               <p className="dispaly-time">
                  asked {moment(question.askedOn).fromNow()} {question.userPosted}
               </p>
            </div>
           </div>
        </div>
    )
}