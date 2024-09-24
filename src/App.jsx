import React from 'react'
import { useState } from 'react'

const App = () => {

  const [color, setcolor] = useState("red")
  let arr = ['red', 'green', 'orange', 'blue', 'brown', 'purple', 'black']

  return (
    <div className='w-ful h-screen' style={{backgroundColor: color}}>
      <div className='flex justify-center absolute bottom-14 inset-x-0 px-5'>
        <div className='px-10 py-3 bg-white rounded-xl flex justify-center gap-8 flex-wrap'>
          {arr.map((color) => {
            return  <button onClick={() => setcolor(color)} className='px-8 rounded-3xl text-white font-bold py-2 outline-none pointer shadow-xl' style={{backgroundColor: color}}>{color}</button>
          })}
        </div>
      </div>
    </div>
  )
}

export default App