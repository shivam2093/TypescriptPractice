import React, { useState } from 'react'

function LoggedIn() {
const[isLoggedIn , setIsLoggedIn] = useState(false)

let handlelogin = () => {

setIsLoggedIn(true)
}
let handlelogout = () => {
setIsLoggedIn(false)

}
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
LOGGEDIN COMPONENT
<div>
      <button onClick={handlelogin}>login</button>  
      </div>
      <div>
      <button onClick={handlelogout}>logout</button>  
      </div>
        <div>
            User is {isLoggedIn ? 'loggedIn' : 'loggedout'}
        </div>
    </div>
  )
}

export default LoggedIn