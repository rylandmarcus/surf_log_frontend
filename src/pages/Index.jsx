import React from 'react'
import Component from '../components/Component'
import { useLoaderData } from 'react-router-dom'

const Index = () => {
    const sessions = useLoaderData()
  return (
    <div>
        <h1>Index</h1>
        {sessions.map(s=>{
            return <div key={s.id}>{s.board}</div> 
        })}
        <Component></Component>
    </div>
  )
}

export default Index