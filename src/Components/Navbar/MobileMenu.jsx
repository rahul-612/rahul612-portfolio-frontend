import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';



const MobileMenu = ({theme}) => {
    const [state, setState] = React.useState({
        left: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
          
        >
          
          <div className="mobile_menu_link_container">
          <a className='mobile_menu_link' href="#home" >Home</a>
            <a className='mobile_menu_link' href="#portfolio" >Portfolio</a>
            <a className='mobile_menu_link' href="#about" >About</a>
            <a className='mobile_menu_link' href="#services" >Services</a>
            <a className='mobile_menu_link' href="#skills" >Skills</a>
            <a className='mobile_menu_link' href="#blog" >Blogs</a>
            <a className='mobile_menu_link' href="#contact" >Contact</a>
            </div>
        </Box>
      );
    

  return (
    <div>{
        <React.Fragment key={"left"} >
          <Button onClick={toggleDrawer("left", true)} className={theme=="light"?"blackColor":"whiteColor"} >Menu</Button>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        </React.Fragment>
      }</div>
  )
}

export default MobileMenu