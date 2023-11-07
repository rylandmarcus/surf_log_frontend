import React, { useEffect, useState } from 'react'
import { Form, useLoaderData } from 'react-router-dom'
import axios from "axios"


const SessionsEdit = () => {
    const data = useLoaderData()
    const [spot, setSpot] = useState('')
    const URL = process.env.REACT_APP_URL
    useEffect(()=>{
        const token = localStorage.getItem('token')
        const getData = async()=>{
            const response = await axios.get(URL+'spots/'+data.spot+'/', {
                headers:{
                    'Authorization': `Token ${token}`
                }
            })
            setSpot(response.data)
        }
        getData()
    }, [])
    
  return (
    <div>
        <h2>Editing Session at {spot.name}</h2>
        <Form action={`/updatesession/${data.id}`} method='post'>
            <input type="text" name='notes' placeholder='notes' defaultValue={data.notes}/>
            <input type="text" name='board' placeholder='board' defaultValue={data.board}/>
            <input type="text" name='size' placeholder='size' defaultValue={data.size}/>
            <input name='spot' defaultValue={data.spot} hidden/>
            <input name='user' defaultValue={data.user} hidden/>
            <button>Update Session</button>
        </Form>
    </div>
  )
}

export default SessionsEdit