
import React from 'react'

type GreetProps = {
   name: string,
   message?:number,
   isLogged:boolean,

}

function Greet(props:GreetProps) {
  return (
    <div>
        <h2>{ 
        props.isLogged ? `Greet ${props.name} 
            you have msg` :
            `please log in first`
            }
        </h2>
        </div>
  )
}

export default Greet