import {useLocation,useNavigate } from "react-router-dom"
import './HomeMainbar.css'

import QuestionList from "./QuestionList"
import { useSelector } from "react-redux";


export default function HomeMainbar(){

    const location = useLocation()

    const user=1;

    const navigate = useNavigate()

  const questionList = useSelector(state=>(state.questionsReducer))
  console.log(questionList)



    // var questionList=[
    //     {
    //         id:1,
    //         votes:3,
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
    //             userAnswered:"kere",
    //             answeredOn:'jan 2',
    //             userId:2
    //         }]
    //     },
    //     {
    //         id:2,
    //         votes:1,
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
    //             userAnswered:"kere",
    //             answeredOn:'jan 2',
    //             userId:2
    //         }]
    //     },
    //     {
    //         id:3,
    //         votes:2,
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
    //             userAnswered:"kere",
    //             answeredOn:'jan 2',
    //             userId:2
    //         }]
    //     },
    //     {
    //         id:4,
    //         votes:1,
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
    //             userAnswered:"kere",
    //             answeredOn:'jan 2',
    //             userId:2
    //         }]
    //     },
    //     {
    //         id:5,
    //         votes:0,
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
    //             userAnswered:"kere",
    //             answeredOn:'jan 2',
    //             userId:2
    //         }]
    //     }
    // ]

    function checkAuth(){
        if(user===null){
        alert("Login or Signup to ask question")
        navigate('/Auth')
        }else{
            navigate('/AskQuestion')
        }
    }

   
    return(
        <div className="main-bar">
            <div className="main-bar-header">
         {
            location.pathname === '/'? <h1>Top Questions</h1>:<h1>All Questions</h1>
         }
         <button onClick={checkAuth} className="ask-btn">Ask Question</button>
         
            </div>
            <div>
                {
                    questionList.data===null ? 
                    <h1>Loading...</h1>:
                    <>
                    <p>{questionList.data.length} questions</p>
                    
                   <QuestionList questionList={questionList.data}/>
                    
                    </>
                }
            </div>
        </div>
    )
}