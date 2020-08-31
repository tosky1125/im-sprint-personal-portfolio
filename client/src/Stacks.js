import React from 'react'
import { front, back } from './map'

const Stacks = () => (
    <section>
      <div className='frontend'>
        <ul>
        {front.map((ele,index) => 
          <li key={index}>{ele.tag}<span>{ele.stack}</span></li>
        )}
        </ul>
      </div>
      <div className='backend'>
        <ul>
          {back.map((ele,index) => (
            <li key={index}>{ele.tag}<span>{ele.stack}</span></li>
          ))}
        </ul>
      </div>
      <div className='databases'></div>
    </section>
)

export default Stacks;