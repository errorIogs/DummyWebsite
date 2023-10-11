import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState({x:0,y:0})
  function ClickHandler(m){
    setCount({x: m.x,y:m.y})
  }
  document.addEventListener("mousemove",ClickHandler)

  return (
    <>
      <div style={{left:`${count.x}px`, top:`${ count.y +Math.sin(count.x/10)*100}px`,backgroundColor:`hsl(${count.x},100%,50%)`}} className='box ' id = "TheMagicalBox"onClick={ClickHandler}>
        <p>x = {count.x} and y = {count.y}</p>
      </div>
</>

  )
}
export default App
