import Question from "./Question"

export default function QuestionList({questionList}){
    return(
        <>
        {
             questionList.map((question)=>(

                <Question question={question} key={question._id}/>
            ))
            
        }
        </>
    )
}