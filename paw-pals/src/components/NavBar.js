import * as React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <div className='flexWrapper' style={{ justifyContent: 'space-evenly', alignItems:"center",background:"black" }}>
        <Link to='/pages/home'>
          <h2 className="NavBarText">Paw Pals</h2>
        </Link>
        <Link to='/pages/projects'>
        <h2 className="NavBarText" >Project</h2>
        </Link>
        <Link to='/pages/team'>
        <h2 className="NavBarText" >Team</h2>
        </Link>
        <Link to='/pages/journal'>
        <h2 className="NavBarText" >Journal</h2>
        </Link>
        <Link to='/pages/deliverables'>
        <h2 className="NavBarText" >Deliverables</h2>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
