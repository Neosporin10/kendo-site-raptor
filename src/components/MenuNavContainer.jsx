import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '@progress/kendo-react-layout';


const MenuNavContainer = (props) => {
    return (
        <Menu>
            <MenuItem text="Home" render={()=> <Link to={'/'}>Home</Link>}/>
            <MenuItem text="Blog" render={()=> <Link to={'/blog'}>Blog</Link>}/>
            <MenuItem text="Chart" render={()=> <Link to={'/concrete'}>Concrete Calculator</Link>}/>
            <MenuItem text="Forms" render={()=> <Link to={'/forms'}>Forms</Link>}/>
        </Menu>
    );
}

export default MenuNavContainer;