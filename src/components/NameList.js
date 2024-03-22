import React from 'react'
import Person from './Person'

function NameList() {
    const names=['Ram','Hari','Shyam','Ram']
  
    const persons=[
        {
            id:1,
            name:'Ram',
            age:30,
            skill:'React'
        },
        {
            id:2,
            name:'Hari',
            age:25,
            skill:'Angular'
        },
        {
            id:3,
            name:'Shyam',
            age:28,
            skill:'Vue'
        }
    ]
    const nameList=names.map((name,index)=> <h2 key={index}>{index}{name}</h2>)
    
    
  return (
    <div>
       { nameList}
      
    </div>
  )
}

export default NameList
