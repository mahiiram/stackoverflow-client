import axios from "axios";

const API = axios.create({baseURL:'https://stack-overflow-7gi6.onrender.com/'})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('Profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
})

export const LogIn = (authData) =>API.post('/users/login',authData)
export const SignUp = (authData) =>API.post('/users/signup',authData)


export const postQuestions = (questionData) =>API.post('/questions/ask',questionData)
export const getAllQuestions =()=>API.get('/questions/get')
export const deleteQuestion =(id)=>API.delete(`/questions/delete/${id}`)
export const voteQuestion=(id , value, userId)=>API.patch(`/questions/vote/${id}`,{value, userId})

export const postAnswer = (id,noOfAnswers,answerBody,userAnswered, userId) =>API.patch(`/answer/post/${id}`,{noOfAnswers,answerBody,userAnswered,userId})
export const deleteAnswer = (id, answerId, noOfAnswers)=>API.patch(`/answer/delete/${id}`,{ answerId, noOfAnswers})

export const fetchAllUsers =()=>API.get('/users/getAllUsers')
export const updateProfile =(id, updateData)=>API.patch(`/users/update/${id}`, updateData)