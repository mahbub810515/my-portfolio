import React from 'react'
import Container from '../conponents/Container'
import Post from '../conponents/Post'


const RecentPost = () => {
    return (
        <div className='w-full pt-17 pb-8 bg-[#EDF7FA]'>
            <Container>
                <h2 className='font-normal text-2xl py-2'>Recent posts</h2>
                <div className='flex justify-between'>
                    <Post />
                    <Post />
                </div>

            </Container>

        </div>
    )
}

export default RecentPost