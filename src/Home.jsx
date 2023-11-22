import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';


const Home = () => {
    const navigate = useNavigate();
    const [sessionExpired, setSessionExpired] = useState(false);
  
    useEffect(() => {
      const timeoutDuration = 10000;
      const sessionTimeout = setTimeout(() => {
        setSessionExpired(true);
      }, timeoutDuration);
      return () => clearTimeout(sessionTimeout);
    }, []);
    useEffect(() => {
      if (sessionExpired) {
        navigate('/');
      }
    }, [sessionExpired, navigate]);
  return (
    <h1>Welcome to the Home Page</h1>
  )
}

export default Home