import React from 'react'

type inputProps = {
    value : string,
    onChange : (event: React.ChangeEvent<HTMLInputElement>) => void
}

function Input(props: inputProps) {
  return (
    <div> 

        <input type = "text" value={props.value} 
        onChange={props.onChange}/>
    </div>
  )
}

export default Input