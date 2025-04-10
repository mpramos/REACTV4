import React from 'react'
import UserCard from './UserCard'


const TechList = () => {
    const techs=['HTML','CSS','JavaScript']
  return (
    <>
    <ul>
    {techs.map(tech=><li key={tech}>{tech}</li>)}
     </ul>
     <UserCard/>
    </>
  )
}

export default TechList