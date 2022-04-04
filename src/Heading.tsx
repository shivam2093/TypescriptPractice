import React from 'react'

type HeadingProps = {
    children : string
}

function Heading(props: HeadingProps) {
  return (
    <div>
Heading Component
<h2> {props.children}</h2>
    </div>
  )
}

export default Heading