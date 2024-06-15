import React from 'react'

export default function Category_navbar() {
  return (
    <>
        <div className='w-full h-3 px-5 py-3 font-semibold '>
            <ul className='flex justify-start gap-5 '>
                <li><a href="/Book" className= 'border-none  hover:border-b-indigo-800 hover:border-b-2 hover:border-solid ' >BOOKS</a></li>
                <li><a href="/Vehicles" className='border-none hover:border-b-indigo-800 hover:border-b-2 hover:border-solid '  >VEHICLES</a></li>
                <li><a href="/Electronics" className='border-none hover:border-b-indigo-800 hover:border-b-2 hover:border-solid '  >ELECTRONICS</a></li>
                <li><a href="/Furniture" className='border-none hover:border-b-indigo-800 hover:border-b-2 hover:border-solid '  >FURNITURE</a></li>
            </ul>
        </div>
    </>
  )
}
