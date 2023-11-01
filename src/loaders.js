const URL = "http://localhost:8000/"

export const indexLoader = async()=>{
    const response = await fetch(URL+'surfsession/')
    const surfsession = await response.json()
    return surfsession
}