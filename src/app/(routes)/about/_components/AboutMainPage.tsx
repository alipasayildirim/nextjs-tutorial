"use client";

import { Button } from '@/components/ui/button';
import React, { useState } from 'react'

const AboutMainPage = () => {
    const [count, setCount] = useState<number>(0);
  return (
    <div>
       <div className='inline-flex rounded-full py-1 px-2 mb-4 bg-gray-100  '> {count}</div>
       <div className='flex gap-2'>
         <Button onClick={()=> setCount(count + 1)}> Increment</Button>
        <Button onClick={()=> setCount(0)}>Reset</Button>
       </div>
    </div>
  )

}

export default AboutMainPage