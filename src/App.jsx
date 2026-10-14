import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Accounts from './components/Accounts'
import Accounts1 from './components/Accounts1'
import Accounts2 from './components/Accounts2'
import Accounts3 from './components/Accounts3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Accounts/> */}
      {/* <Accounts1/> */}
      {/* <Accounts2 /> */}
      <Accounts3 />
    </>
  )
}

export default App
