import React from 'react'
import Person from './Person'

function NameList() {
  
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
    const personList=persons.map(person=> (
        <Person person={Person} />
    )
    
    )
  return (
    <div>
       { personList}
      
    </div>
  )
}

export default NameList
