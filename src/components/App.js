import React, { useState } from "react"

import './../styles/App.css';

const App = () => {
  const [count, setCounter]=useState(0)
  console.log("count",count)
  return (
    <div>
        {/* Do not remove the main div */}
        
       <p>Button clicked {count} times</p>
       <button onClick={()=>setCounter((count)=>count+1)}>Click Me</button>

    </div>
  )
}

export default App
