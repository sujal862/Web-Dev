import { useState } from "react";

function App() {
  const [color, setColor] = useState('maroon');
  return (
    <>
      <div className="w-full h-screen duration-300"
      style={{backgroundColor: color}}    //inline css
      >
        <div className="fixed flex flex-wrap
        justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 
            shadow-lg bg-white px-3 py-2 rounded-3xl">
              <button
              onClick={() => setColor('red')}
              className="outline-none px-4 py-1 rounded-full
              bg-red-500 text-white shadow-lg"
              >Red
              </button>
              <button
              onClick={() => setColor('green')}
              className="outline-none px-4 py-1 rounded-full
              bg-green-500 text-white shadow-lg"
              >Green
              </button>
              <button
              onClick={() => setColor('blue')}
              className="outline-none px-4 py-1 rounded-full
              bg-blue-500 text-white shadow-lg"
              >Blue
              </button>
              <button
              onClick={() => setColor('orange')}
              className="outline-none px-4 py-1 rounded-full
              bg-orange-500 text-white shadow-lg"
              >Orange
              </button>
              <button
              onClick={() => setColor('Gray')}
              className="outline-none px-4 py-1 rounded-full
              bg-gray-400 text-white shadow-lg"
              >Gray
              </button>
              <button
              onClick={() => setColor('purple')}
              className="outline-none px-4 py-1 rounded-full
              bg-purple-500 text-white shadow-lg"
              >Purple
              </button>
              <button
              onClick={() => setColor('black')}
              className="outline-none px-4 py-1 rounded-full
              bg-black text-white shadow-lg"
              >black
              </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
