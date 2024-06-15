import React from 'react'

export default function Login() {
  return (
    <div>
      <div className='px-5 py-2 fixed'>
                <a href="/" className=" text-violet-600 font-bold text-3xl " >Listify </a>
        </div>
    <div className=' grid h-screen place-items-center '>
        

            <div className=' w-96 h-96  bg-indigo-400 grid  place-items-center rounded-lg'>
                <div className='  p-10'>
                    <div className=' text-white font-bold text-2xl text-center underline'>LOGIN</div><br />
                    <span className=' text-white'>E-mail :</span><br />
                    <input type="email" className=' rounded-xl w-[17rem] px-5 py-2 my-2 border-2 border-gray-500'  /><br />
                    <span className=' text-white'>Password :</span><br />
                    <input type="email" className=' rounded-xl w-[17rem] px-5 py-2 my-2 border-2 border-gray-500'  /><br /> <br />
                    <div className=' flex justify-center'>
                    <button type="submit" className='rounded-lg bg-indigo-800 text-white px-4 py-2 mx-2'>Submit</button>
                    <a href="/Registration"><button type="submit" className=' rounded-lg bg-indigo-800 text-white px-4 py-2 mx-2'>Registartion</button></a>
                    </div>
                </div>
                <div></div>
                
            </div>

    </div>
    </div>
  )
}
