import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white '>

        <div className=' m-auto container mx-auto py-5 flex items-center justify-between h-14 px-28'>
        <div className='logo font-bold text-2xl'>
        <span className='text-green-500'> &lt;</span>
            Pass
            <span className='text-green-500'>Shield/&gt;</span> 
            </div>
        {/* <ul>
            <li className='flex gap-4'>
                <a className='hover:font-bold' href="#">Home</a>
                <a className='hover:font-bold' href="#">About</a>
                <a className='hover:font-bold' href="#">Contact</a>
            </li>
        </ul> */}
        <button className='text-white '>
          <img src="icons/github.svg" alt="github icon" className='invert p-5 w-16' />
        </button>
        </div>
    </nav>
  )
}

export default Navbar