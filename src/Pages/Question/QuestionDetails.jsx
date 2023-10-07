import { Link, useNavigate, useParams ,useLocation} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import moment from "moment";
import copy from 'copy-to-clipboard';

import './Question.css'
import Avatar from '../../Components/Avatar/Avatar'
import DisplayAnswer from "./DisplayAnswer"
import { postAnswer , deleteQuestion , voteQuestion} from "../../actions/question"
import { useState } from "react"


export default function QuestionDetails(){
const {id} = useParams()
const questionList = useSelector(state=>(state.questionsReducer))
console.log(questionList)
    // var questionList=[
    //     {
    //         _id:'1',
    //         upVotes:3,
    //         downVotes:2,
    //         noOFAnswers:2,
    //         questionTitle:"What is a function?",
    //         questionBody:"It mean to be",
    //         questionnTags:['java','node js','react js','mongodb'],
    //         userPosted:"karunya",
    //         userId:1,
    //         askedOn:'jan 1',
    //         answer:[{
    //             answerBody:'Answer',
    //             userAnswered:"deva",
    //             answeredOn:'jan 2',
    //             userId:2
    //         }]
    //     },
    //     {
    //         _id:'2',
    //         upVotes:3,
    //         downVotes:2,
    //         noOFAnswers:0,
    //         questionTitle:"What is a  recursive function?",
    //         questionBody:"It mean to be",
    //         questionnTags:['javascript','R','python'],
    //         userPosted:"karunya",
    //         userId:1,
    //         askedOn:'jan 1',
    //         answer:[{
    //             answerBody:'Answer',
    //             userAnswered:"deva",
    //             answeredOn:'jan 2',
    //             userId:2
    //         }]
    //     },
    //     {
    //         _id:'3',
    //         upVotes:3,
    //         downVotes:2,
    //         noOFAnswers:0,
    //         questionTitle:"java spring",
    //         questionBody:"It mean to be",
    //         questionnTags:['java','spring'],
    //         userPosted:"karunya",
    //         userId:1,
    //         askedOn:'jan 1',
    //         answer:[{
    //             answerBody:'Answer',
    //             userAnswered:"deva",
    //             answeredOn:'jan 2',
    //             userId:2
    //         }]
    //     },
    //     {
    //         _id:'4',
    //         upVotes:3,
    //         downVotes:2,
    //         noOFAnswers:0,
    //         questionTitle:"What is node js?",
    //         questionBody:"It mean to be",
    //         questionnTags:['javascript','nodejs'],
    //         userPosted:"karunya",
    //         userId:1,
    //         askedOn:'jan 1',
    //         answer:[{
    //             answerBody:'Answer',
    //             userAnswered:"deva",
    //             answeredOn:'jan 2',
    //             userId:2
    //         }]
    //     },
       
    //     {
    //         _id:'5',
    //         upVotes:3,
    //         downVotes:2,
    //         noOFAnswers:0,
    //         questionTitle:"What is callback function?",
    //         questionBody:"It mean to be",
    //         questionnTags:['java','spring'],
    //         userPosted:"karunya",
    //         userId:1,
    //         askedOn:'jan 1',
    //         answer:[{
    //             answerBody:'Answer',
    //             userAnswered:"deva",
    //             answeredOn:'jan 2',
    //             userId:2
    //         }]
    //     }
    // ]
   const[Answer,setAnwer] = useState('')
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const User = useSelector((state)=>(state.currentUserReducer))

   const location = useLocation()
   const url = 'http://localhost:3000'


  function handlePostAns(e,answerLength){
  e.preventDefault()
  if(User ===null){
     alert('LogIn or SingUp to answer a question')
     navigate('/Auth')
  }else{
    if(Answer === ''){
        alert('Enter an answer before submitting')
    }else{
        dispatch(postAnswer({id, noOfAnswers:answerLength+1, answerBody:Answer, userAnswered: User.result.name, userId: User.result._id}))
    }
  }
  }

function handleShare(){
    copy(url+location.pathname)
    alert('Copied url : ' +url+location.pathname)
}

function handleDelete(){
    dispatch(deleteQuestion(id,navigate))
}

function handleUpVote(){
    dispatch(voteQuestion(id, 'upVote', User.result._id))
}
function handleDownVote(){
    dispatch(voteQuestion(id, 'downVote', User.result._id))
}



    return (
        <div className="question-details-page">
   {
    questionList.data === null ?
    <h1>Loading...</h1>:
    <>
    {
        questionList.data.filter(question=>question._id === id).map(question=>(
            <div key={question._id}>
                <section className="question-details-container">
                    <h1>{question.questionTitle}</h1>
                    <div className="question-details-container-2">
                        <div className="question-votes">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width='18'className="votes-icon" onClick={handleUpVote} >
                        <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"/>
                        </svg>
                            <p>{question.upVotes.length - question.downVotes.length}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width='18' className="votes-icon" onClick={handleDownVote}>
                            <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                            </svg>

                        </div>
                        <div style={{width:'100%'}}>
                            <p className="question-body">{question.questionBody}</p>
                            <div className="question-details-tags">
                                {
                                    question.questionTags.map((tag)=>(
                                        <p key={tag}>{tag}</p>
                                    ))
                                }

                            </div>
                            <div className="question-action-user">
                                <div>
                                    <button type="button" onClick={handleShare}>Share</button>
                                    {
                                        User?.result._id === question?.userId && (
                                            <button type="button" onClick={handleDelete}>Delete</button>
                                        )
                                    }
                                    
                                </div>
                                <div>
                                    <p>asked {moment(question.askedOn).fromNow()}</p>
                                    <Link to={`/Users/${question.userId}`} className="user-link" style={{color:'#0086d8'}}>
                                        <Avatar backgroundColor='orange' px='8px' py='10px'>
                                            {question.userPosted.charAt(0).toUpperCase()}
                                        </Avatar>
                                        <div>
                                            {question.userPosted}
                                        </div>
                                    </Link>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>
                {
                    question.noOfAnswers !== 0 &&(
                        <section>
                            <h3>{question.noOfAnswers} answers </h3>
                            <DisplayAnswer key={question._id} question={question} handleShare={handleShare}/>
                        </section>
                    )
                }
                <section className="post-ans-container">
                   <h3>
                    Your Answer
                   </h3>
                   <form onSubmit={(e)=>{handlePostAns(e, question.answer.length)}}>
                    <textarea name="" id="" cols="30" rows="10" onChange={e=>setAnwer(e.target.value)}></textarea><br/>
                    <input type="submit" className="post-ans-btn" value='Post your Answer'/>
                   </form>
                   <p>Browser other Question tagged
                    {
                        question.questionTags.map((tag)=>(
                            <Link to='/Tags' key={tag} className="ans-tags"> {tag} </Link>
                        ))
                    } or  <Link to='/AskQuestion' style={{textDecoration:'none',color:'#009dff'}}>
                         ask your own question
                    </Link>
                   </p>
                </section>

            </div>
        ))
    }
    
    </>
   }
        </div>
    )
}