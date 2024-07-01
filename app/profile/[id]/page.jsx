"use client"

import {useState, useEffect} from 'react'
import { useSearchParams } from "next/navigation";
import Profile from '@components/Profile';

const userProfile = ({params}) => {
  
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");
  const [posts, setPosts] = useState([]); 

  const fetchPosts = async()=>{
    const response = await fetch(`/api/users/${params?.id}/posts`);
    const data = await response.json();
    
    setPosts(data);
  }

  useEffect(()=>{
    if (params?.id) fetchPosts();
  },[])

  return (

    <Profile
      name = {userName}
      desc =  {`Welcome to the profile page of ${userName}. Explore the prompts created by ${userName} and use it at any AI powered platform`}
      data ={posts}
    />

  )
}

export default userProfile