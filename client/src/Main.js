import React from 'react'
import { sns } from './map'

const Main = (props) => (
    <main>
      <div className='aboutme'>
        <h3>About me</h3>
        <p>Shawn Han loves programming, working in team, debating, traveling abroad. He does not like showing about himself in the  3rd person. From mid 2020, He became a member of programming bootcamp named <a href='https://www.codestates.com/'>'CODESTATES'</a>. After he initiate his career as  developer, he learned 'Java Script, node.js' with popular libraries and framework such as React, Redux and Express.  Previously, He used to be a carpenter and was founder of Oneline, a company that provides commercial interior services. He   was also a marketing manager of consumer goods company 'DIAGEO' in London, UK. For more info, feel free to check out his  SNS and send a mail.</p>
      </div>
      <div className='contact'>
        <h2>Contact</h2>
        <div className='sns'>
        {sns.map((ele,index) => (
          <a key={index} href={ele.link}>{ele.tag}<span key={index}>{ele.name}</span></a>
        ))}
        <a href={"mailto:tosky0514@gmail.com"}><i className="fas fa-envelope-square fa-lg"></i><span>Mail</span></a>
        <a onClick={()=>props.send()}><i className="fas fa-file fa-lg"></i><span>Subscribe</span></a>
        </div>
      </div>
    </main>
)
export default Main;