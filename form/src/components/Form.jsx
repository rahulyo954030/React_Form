import React from 'react'
import { useState } from 'react'
import axios from "axios"
let initialvalue = {
    title:"",
    body:"",
    description:""
}
const Form = () => {

    const [data,setData]= useState(initialvalue)

    const handlechange =(e)=>{
        const {name,value} = e.target;
        setData({...data, [name]:value})
    }
    
    const addPost = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:8080/blog", data)
        setData(initialvalue)
    }
  return (
    <div>
        <form onSubmit={addPost}>
            <input type="text" placeholder='title...' value={data.title}  name="title" onChange={handlechange}/>
            <br />
            <input type="text" placeholder='body...'  value={data.body} name="body" onChange={handlechange}/>
            <br />
            <input type="text" placeholder='description...'  value={data.description} name="description" onChange={handlechange}/>
            <br />
            <input type="submit" value="Add Post" />
        </form>
    </div>
  )
}

export default Form