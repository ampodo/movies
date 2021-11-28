import React from "react";


function Header () {

       return <nav className="indigo lighten-1">


      <div className="nav-wrapper">
      <img className="img"  src={process.env.PUBLIC_URL + '/icons/player.png'}/>
      
      <a href="#" className="brand-logo">Movie Library</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
            <a href={'https://github.com/ampodo/'}>Repository</a> 
         </li>   
      </ul>
      </div>
  
      </nav>

}

export {Header}

