import { Link } from "react-router-dom";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Avatar from '../../Components/Avatar/Avatar'
import {deleteAnswer}  from '../../actions/question'

export default function DisplayAnswer({question,handleShare}){
    const User = useSelector((state)=>(state.currentUserReducer))
    const {id} = useParams()
    const dispatch = useDispatch()
    function handleDelete(answerId,noOfAnswers){
     dispatch(deleteAnswer(id,answerId,noOfAnswers-1))
    }
    
    return(
        <div>
            {
                
                question.answer.map((ans)=>(
                    <div className="display-ans" key={ans._id}>
                        <p>{ans.answerBody}</p>
                        <div className="question-action-user">
                           <div >
                            <button type="button"  onClick={handleShare}>Share</button>
                            {
                                        User?.result._id === ans?.userId && (
                                            <button type="button" onClick={()=>handleDelete(ans._id, question.noOfAnswers)}>Delete</button>
                                        )
                                    }
                           </div>
                           <div>
                            <p >answered {moment(ans.answeredOn).fromNow()}</p>
                            
                            <Link to={`/Users/${ans.userId}`} className="user-link" style={{color:'#0086d8'}}>
                                        <Avatar backgroundColor='green' px='8px' py='10px'>
                                        {ans.userAnswered.charAt(0).toUpperCase()}
                                        </Avatar>
                                        <div>
                                            {ans.userAnswered}
                                           
                                           
                                        </div>
                                    </Link>
                           </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

//