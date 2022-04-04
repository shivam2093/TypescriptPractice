import React from 'react'

type containerProps = {
    styles: React.CSSProperties
}

function Styles(props: containerProps) {
  return (
    <div style={props.styles}>
        Styles components
        </div>
  )
}

export default Styles