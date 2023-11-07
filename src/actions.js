import { redirect } from "react-router-dom"
const URL = process.env.REACT_APP_URL
// const URL = "http://localhost:8000/"

export const createSession = async({request})=>{
    const formData = await request.formData()
    const newSession = {
        board: formData.get("board"),
        notes: formData.get("notes"),
        spot: formData.get("spot"),
        size: formData.get("size"),
    }
    const token = localStorage.getItem('token')
    await fetch(URL + "surfsessions/", {
        method: "post",
        headers: {
            'Authorization': `Token ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newSession)
    })
    console.log(JSON.stringify(newSession))
    return redirect("/sessions")
}

export const updateSession = async ({request, params})=>{
    const formData = await request.formData()
    const updatedSession = {
        board: formData.get("board"),
        notes: formData.get("notes"),
        size: formData.get("size"),
        spot: formData.get("spot"),
        user: formData.get("user")
    }
    console.log(updatedSession);
    const token = localStorage.getItem('token')
    await fetch(URL + `surfsessions/${params.id}/`, {
        method: "put",
        headers: {
            'Authorization': `Token ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedSession)
    })
    return redirect(`/sessions/${params.id}`)
}

export const deleteSession = async({params})=>{
    const token = localStorage.getItem('token')
    await fetch(URL + `surfsessions/${params.id}/`, {
        method: "delete",
        headers: {
            'Authorization': `Token ${token}`,
        },
    })
    return redirect("/sessions")
}

export const createSpot = async({request})=>{
    const formData = await request.formData()
    const newSpot = {
        name: formData.get("name"),
        type: formData.get("type"),
        location: formData.get("location"),
        difficulty: formData.get("difficulty"),
    }
    const token = localStorage.getItem('token')
    await fetch(URL + "spots/", {
        method: "post",
        headers: {
            'Authorization': `Token ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newSpot)
    })
    return redirect("/spots")
}

export const createUser = async({request})=>{
    const formData = await request.formData()
    const newUser = {
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
        re_password: formData.get("re_password"),
    }
    await fetch(URL + "users/", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    })
    return redirect("/login")
}

