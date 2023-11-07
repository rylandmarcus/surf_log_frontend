import React from 'react'
import { Form, Link, useLoaderData } from 'react-router-dom'

export const SessionsShow = () => {
    const data = useLoaderData()
  return (
    <div>
        <h1>Sessions Show</h1>
        <h2>{data.size}</h2>
        <h2>{data.board}</h2>
        <h2>{data.notes}</h2>
        <Link to={`/editsession/${data.id}`}>Edit</Link>
        <Form action={`/deletesession/${data.id}`} method='post'>
            <button>DELETE</button>
        </Form>
    </div>
  )
}
