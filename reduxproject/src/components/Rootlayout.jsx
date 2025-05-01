import React from 'react'
import { Outlet } from 'react-router-dom'
function Rootlayout() {
  return (<>
  <div>Navigation</div>
    <main>
        <Outlet/>
    </main>
  </>
    
  )
}

export default Rootlayout