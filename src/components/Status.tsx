import React from 'react'

type status = {
    status: 'loading' | 'error' | 'success'
}

function Status(props:status) {

let msg 
if(props.status === 'loading'){
    msg = 'loading...'
}else if(props.status === 'error'){
msg = 'error'
}else if(props.status === 'success'){
    msg = 'SUCCESS'
}

  return (
    <div>
        status component
      <h2>{props.status}</h2>

    </div>
  )
}

export default Status