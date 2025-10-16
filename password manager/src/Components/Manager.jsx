import React, { useState, useEffect } from 'react'
import { useRef } from 'react'

const Manager = () => {
    const ref = useRef()
    const passwordref = useRef()

    const [form, setForm] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])

    const showPassword = () => {
        passwordref.current.type = "text"
        // alert("show password")
        console.log(ref.current.src)

        if (ref.current.src.includes("icons/eyecross.png")) {
            ref.current.src = "icons/eye.png"
            passwordref.current.type = "password"
        }
        else {
            ref.current.src = "icons/eyecross.png"
            
        }
    }

    const savePassword = () => {
        // console.log(form)
        setPasswordArray([...passwordArray, form])
        localStorage.setItem("password", JSON.stringify([...passwordArray, form]))
        console.log([...passwordArray, form])
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <>
            {/* bg copied from https://bg.ibelick.com/ */}
            <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-green-200 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>

            <div className='container mx-auto  px-40 py-6'>

                <h1 className='text-4xl font-bold text-center'>
                    <span className='text-green-500'> &lt;</span>
                    Pass
                    <span className='text-green-500'>Shield/&gt;</span>
                </h1>

                <p className='text-green-800 text-lg text-center'>Your own Password Manager</p>

                <div className='text-black flex flex-col p-4 gap-8 items-center'>
                    <input className='rounded-full border border-green-600 w-full p-4 py-1' placeholder='Enter Website URL' type="text" name='site' id='' value={form.site} onChange={handleChange} />
                    <div className="flex w-full justify-between gap-8">
                        <input className='rounded-full border border-green-600 w-full p-4 py-1' placeholder='Enter Username' type="text" name='username' id='' value={form.username} onChange={handleChange} />

                        <div className="relative">
                            <input ref={passwordref} className='rounded-full border border-green-600 w-full p-4 py-1' placeholder='Enter Password' type="password" name='password' id='' value={form.password} onChange={handleChange} />
                            <span className='absolute  right-2 top-1 cursor-pointer ' onClick={showPassword}>
                                <img ref={ref} className='w-6' src='icons/eye.png' alt='eye'></img>
                            </span>
                        </div>

                    </div>

                    <button className='flex justify-center items-center bg-green-500 rounded-full w-fit px-12 py-1 hover:bg-green-600 hover:font-bold border border-green-900' onClick={savePassword}>
                        <lord-icon
                            src="https://cdn.lordicon.com/hqymfzvj.json"
                            trigger="hover"
                        >
                        </lord-icon>
                        Add Password</button>

                </div>

                <div className='passwords'>
                    <h2 className='font-bold'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No Passwords to show</div>}
                    {passwordArray.length != 0 && 
                    <table className="table-auto w-full overflow-hidden rounded-md">
                        <thead className=' bg-green-800 text-white'>
                            <tr>
                                <th className='py-2 border border-rose-950'>Site</th>
                                <th className='py-2 border border-rose-950'>Username</th>
                                <th className='py-2 border border-rose-950'>Password</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-200'>
                            {passwordArray.map((item ,index)=>{
                                return( 
                            <tr key={index}>
                                <td className='py-2 border border-white text-center w-full flex justify-center align-center'>{item.site}<img src='icons/copyicon.png' className='w-5 h-5 mix-blend-color-burn'></img></td>

                                <td className='py-2 border border-white text-center w-full flex justify-center cursor-pointer items-center'>{item.username}<img src='icons/copyicon.png' className='w-4 mix-blend-color-burn'></img></td>

                                <td className='py-2 border border-white text-center w-full flex justify-center cursor-pointer items-center'>{item.password}<img src='icons/copyicon.png' className='w-4 mix-blend-color-burn'></img></td>
                                
                            </tr>
                            )
                            })}
                        </tbody>
                    </table>}
                </div>

            </div>
        </>
    )
}

export default Manager