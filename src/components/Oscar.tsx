import React from 'react'
type oscarProps = {
    children:React.ReactNode
}

function Oscar(props: oscarProps) {
  return (
    <div>
       oscarcomponent {props.children}
        </div>
  )
}

export default Oscar