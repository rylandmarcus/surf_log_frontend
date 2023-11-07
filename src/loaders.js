import axios from "axios"

const URL = process.env.REACT_APP_URL
// const URL = "http://localhost:8000/"


export const indexLoader = async()=>{
    const token = localStorage.getItem('token')
    console.log(token)
    const response = await axios.get(URL+'surfsessions/', {
    // const response = await fetch('http://localhost:8000/surfsessions/', {
        headers:{
            // 'Authorization': `Bearer ${token}`
            'Authorization': `Token ${token}`
        }
    })
    const surfsession = response
    // const surfsession = await response.json()
    console.log(response.data)
    const head = response.headers.get('Authorization')
    console.log(head);
    return surfsession.data
}

export const sessionShowLoader = async({params})=>{
    const token = localStorage.getItem('token')
    const response = await fetch(URL+'surfsessions/'+params.id+'/', {
        headers:{
            'Authorization': `Token ${token}`
        }
    })
    const surfsession = await response.json()
    return surfsession
}

export const spotsLoader = async()=>{
    const token = localStorage.getItem('token')
    console.log(token)
    const response = await axios.get(URL+'spots/', {
        headers:{
            'Authorization': `Token ${token}`
        }
    })
    return response.data
}