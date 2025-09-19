import React, {useEffect, useState} from 'react'
import {useLoaderData} from 'react-router-dom'

const Github = () => {
    // const [data,setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/digantaa')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
    
    const data = useLoaderData();
    


  return (
    <div className='text-center m-4  p-4 text-3xl'>
      Github followers: {data.followers} 
      <div className='flex justify-center mt-4'>
      <img  className='rounded-full' src={data.avatar_url} alt="Git picture" width={300} />
      </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/digantaa')
  return response.json()
}
