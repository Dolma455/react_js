import React from 'react'

const Hello = () => {
    // return (
    //     <div>
    //         <h1> Hello Dolma</h1>
    //     </div>
    // )
    return React.createElement('div',null,React.createElement('h1',null,'Hello Dolma'),React.createElement('h2',null,'Hello Dolma'))
}

export default Hello