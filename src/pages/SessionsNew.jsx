import React from 'react'
import { Form, useLoaderData } from 'react-router-dom'

const SessionsNew = () => {
    const spots = useLoaderData()
    console.log(spots)
  return (
    <div>
        <h2>Add a New Session</h2>
        <Form action='/createsession' method='post'>
            <input type="text" name='notes' placeholder='notes'/>
            <input type="text" name='board' placeholder='board'/>
            <input type="text" name='size' placeholder='size'/>
            <select name="spot">
                {spots.map(s=>{
                    return <option key={s.id} value={s.id}>{s.name}</option>
                })}
            </select>
            <button>Add Session</button>
        </Form>
    </div>
  )
}

export default SessionsNew