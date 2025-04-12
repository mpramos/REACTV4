import React from 'react'

const ArrayProps = ({hobbies}) => {
    return (
        <div>
        <h4>Hobbies</h4>
        <ul>
            {hobbies.map((hobby,index)=>(<li key={index}>{hobby}</li>))}  
        </ul>
    </div>
  )
}

export default ArrayProps