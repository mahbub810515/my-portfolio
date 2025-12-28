import React from 'react'
import Container from '../conponents/Container'

const Header = () => {
    return (
        <Container>
            <header className="site-header flex justify-between">
            <div className="logo">
                <h1>Mahbubar Rahman</h1> {/* Or an image logo */}
            </div>
            <nav className="main-nav p-2.5">
                <ul className='flex gap-5'>
                    <li><a href="#about">Works</a></li>
                    <li><a href="#projects">Blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                    {/* Add more links as needed */}
                </ul>
            </nav>
        </header>
        </Container>
    )
}

export default Header