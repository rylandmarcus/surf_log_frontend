import React from 'react'
import { Form, useLoaderData } from 'react-router-dom'

const SpotsIndex = () => {
    const data = useLoaderData()
    const showNewSpotForm = (e)=>{
        e.preventDefault()
        e.target.nextElementSibling.hidden = false
        e.target.hidden = true
    }
    const cancelAddNewSpot = (e)=>{
        e.preventDefault()
        e.target.parentElement.previousElementSibling.hidden = false
        e.target.parentElement.hidden = true
    }
  return (
    <div>
        <h2>Spots</h2>
        <button onClick={showNewSpotForm}>Add Spot</button>
        <div hidden>
        <Form action='/addspot' method='post'>
            <input type="text" name='name' placeholder='Spot Name'/>
            <input type="text" name='type' placeholder='Type of Surf Spot'/>
            <input type="text" name='location' placeholder='Location'/>
            <input type="text" name='difficulty' placeholder='Difficulty'/>
            <button>Add Spot</button>
        </Form>
        <button onClick={cancelAddNewSpot}>Cancel Add New Spot</button>
        </div>
        {data.map(s=>(
            <div key={s.id}>
                <h2>
                {s.name}
                </h2>
                <div>{s.type}, {s.location}, {s.difficulty}</div>
            </div>
        ))}
    </div>
  )
}

export default SpotsIndex