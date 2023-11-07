import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const SessionsIndex = () => {
    let sessions = useLoaderData()
    if (sessions==false){
        sessions=[]
    }
    const [spots, setSpots] = useState(false)
    const URL = process.env.REACT_APP_URL
    useEffect(()=>{
        const token = localStorage.getItem('token')
        const getData = async()=>{
            const response = await axios.get(URL+'spots/', {
                headers:{
                    'Authorization': `Token ${token}`
                }
            })
            setSpots(response.data)
        }
        getData()
    }, [])
    const findSpot = (s)=>{
        const spot = spots.find(sp=>sp.id==s.spot)
        return spot.name
    }
    return (
      <div>
        <Link to="/newsession">
        <button>New Session</button>
        {/* New Session */}
        </Link>
          {sessions.map(s=>{
              return <div key={s.id}>
                <Link to={`/sessions/${s.id}`} 
                style={{
                    textDecoration: 'none',
                    color: 'black'
                }}
                >
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        border: '1px solid black',
                        margin: '10px',   
                        width: '400px', 
                        justifyContent: 'center',
                        alignItems: 'center',                  
                    }}>
                        <p>{s.size} {spots ? findSpot(s) : ''}</p> 
                        <p>{s.board}</p> 
                        <p>{s.notes}</p> 
                    </div>
                </Link>
                </div> 
          })}
      </div>
    )
}

export default SessionsIndex