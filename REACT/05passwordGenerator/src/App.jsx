import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  //useRef hook -> ek React hook hai jo ek reference (yaani kisi cheez ka reference ya pointer) banane ke liye use hota hai
  const passwordRef = useRef(null); //null menas now no ref is given to passwordRef(variable) 

  const passwordGenerator = useCallback(() => {   //(actually jb koi bhi variable ka state change hoga than app func re render/call kiya jayga jiska karan passwordgenerater func redefine hoga jo ki needed ni tha)so useCallback is used which is a React hook that memoizes a function(stores the instance of that fun), ensuring it only re-creates the function if its dependencies change, to optimize performance.
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+"

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();  //passwordRef.current?.select() safely selects the text inside passwordRef's input element, if it exists
    window.navigator.clipboard.writeText(password)  //to copy in clipboard
  }, [password])

  useEffect(() => { // takes 2 params - jb array ma diya hua dependencis change honga than only diya hua function call run krega
    passwordGenerator();
  }, [charAllowed, numberAllowed, length]);

  return (
    <>
      <div className='w-full text-orange-500 max-w-md shadow-md rounded-lg px-4 py-3 mx-auto my-8 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            ref={passwordRef} //i.e ab passwordRef is reffering this input box
          />
          <button
            className='outline-none bg-blue-700 text-white px-3 py-0.5 '
            onClick={copyPasswordToClipboard}
          >
            copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1' >
            <input
              type="range"
              min={6}
              max={41}
              className='cursor-pointer'
              defaultValue={6}
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed} //(pahla sa kya rhaga)defaultChecked = true ya false uska hisab sa box tick hoga ya ni hoga
              id="numberInput"
              onChange={() => { setNumberAllowed(!numberAllowed) }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllowed} //(pahla sa kya rhaga)defaultChecked = true ya false uska hisab sa box tick hoga ya ni hoga
              id="charInput"
              onChange={() => { setCharAllowed(!charAllowed) }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}


//info = Yes, App will re-render on any state or prop change.
//But passwordGenerator will only run if one of the specified dependencies changes.
// useCallback ka bina bhi kam hojata useEffect use krka but optimization ka liya use krna shi rahta ha


export default App
