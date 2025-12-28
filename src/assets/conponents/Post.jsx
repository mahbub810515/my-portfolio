import React from 'react'

const Post = () => {
  return (
    <div className='w-105 h-75 p-6 mt-8 border rounded bg-white '>
        <h1 className='font-bold text-2xl '>Making a design system from <br />scratch</h1>
        <div className='mt-4 flex justify-between font-normal text-xl'>
            <h3>12 Feb 2020</h3>
            <h3>|</h3>
            <h3>Design Pattern</h3>
        </div>
        <p className='mt-3 text-base'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. 
            Exercitation veniam consequat sunt nostrud amet.</p>
    </div>
  )
}

export default Post