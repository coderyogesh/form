import React from 'react'
import { useEffect, useState } from 'react';
import './About.css'
const About = () => {
  const [profileData, setProfileData] = useState('');
  useEffect(() => {
    
  }, []);
  return (
    <>
    <header>Account Settings</header>
    <div>{profileData}</div>
    </>
  )
}

export default About