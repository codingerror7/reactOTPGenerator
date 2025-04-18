"use client"
import React, { useState } from 'react'

const page = () => {
  const [value, setvalue] = useState(Math.floor(Math.random()*9000+1000));
  function change(){
    const change2 = Math.floor(Math.random()*9000 + 1000);
    setvalue(change2);
  }
  return (
    <>
    <h1 className='text-center font-mono text-6xl extrabold text-white my-3'>OTP GENERATOR:</h1>
    <div className='w-[200px] h-[100px] outline-solid outline-white rounded p-[8px] font-mono text-6xl text-white text-center mx-165 my-10'>{value}</div>
    <button className='w-[100px] text-[15px] font-mono text-white outline-solid outline-white p-[2px] rounded hover:cursor-pointer hover:text-[16px] mx-177 my-10' onClick={change}>Generate!</button>
    <h1 className='text-white font-mono text-[50px] text-center font-extrabold my-10'>YOUR GENERATED OTP IS: {value}</h1>
    </>
  )
}

export default page
