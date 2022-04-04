import React from 'react'
import Login from './Login'

type privateProps = {
    isLoggedIn: boolean,
    Component: React.ComponentType
}

function Private({isLoggedIn ,Component}) {
  
if(isLoggedIn){
    return <Component/>
}else{
return <Login/>
}


}

export default Private