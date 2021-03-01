import React from 'react'
import { Root, Routes } from 'react-static'

import './app.css'

function App() {
  return (
    <Root>
      <React.Suspense fallback={ <div/> }>
        <Routes default />
      </React.Suspense>
    </Root>
  )
}

export default App
