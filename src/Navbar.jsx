import React from 'react'

const Navbar = () => {
  return (
    <div className=' flex py-4 justify-between items-center md:px-10 '>
        <div>
            <h1 className=' uppercase text-xl font-semibold'>
                Anas
            </h1>
        </div>
        <div>
            <ul className=' flex gap-7'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Login</li>
                <li>Sing up</li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar