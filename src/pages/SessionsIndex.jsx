import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const SessionsIndex = () => {
    let sessions = useLoaderData()
    if (sessions==false){
        sessions=[]
    }
    return (
      <div>
        <Link to="/newsession">
        <button>New Session</button>
        {/* New Session */}
        </Link>
          {sessions.map(s=>{
              return <div key={s.id}>
                <Link to={`/sessions/${s.id}`}>{s.board}</Link>
                </div> 
          })}
      </div>
    )
}

export default SessionsIndex