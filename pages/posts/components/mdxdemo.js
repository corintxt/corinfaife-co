import React from "react"
import { useState, useEffect } from 'react';

const Demo = () => {
      const [date, setDate] = useState(new Date());
  
      useEffect(() => {
        const intervalId = setInterval(() => {
          setDate(new Date());
        }, 1000)
    
        return () => clearInterval(intervalId);
      }, [])
    
      return (
        <h3 className='clock' 
            style={{textAlign: 'center', border: '1px dotted black', padding: '10px'}}
        >
          {date.toLocaleTimeString()}
        </h3>
      );
    };
export default Demo