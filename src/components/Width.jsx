import React from 'react';
import { useState, useEffect } from 'react';


const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  },[]);
  return width;
};

const MyWidth = () => {
    const width = useWindowWidth();
  return (
    <p>Window Width is {width}</p>
  )
};


export default MyWidth;