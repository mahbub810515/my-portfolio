import React from 'react'
import Container from '../conponents/Container'
import ProfileImage from '../image/mahbub_1.png'

const Hero = () => {
    return (
        <Container>
            <div className='pt-52.5 pb-24 flex justify-between'>
                <div className='w-4/6'>
                    <h1 className='max-w-126.5 font-bold text-[44px]'>Hi, I am Mahbub, <br /> Creative Technologist</h1>
                    <p className='max-w-250 font-regular text-4 mt-10 '>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                         <br />Velit officia consequat duis enim velit mollit. Exercitation veniam consequat <br /> sunt nostrud amet.</p>
                    <button className='mt-12 p-2.5 rounded bg-[#FF6464] hover:bg-green-500 text-white text-5 font-medium'>Download Resume</button>

                </div>
                <div className='w-2/6'>
                        <img className='rounded-full' src={ProfileImage} alt="profile pic" />
                </div>

            </div>
        </Container>
    )
}

export default Hero