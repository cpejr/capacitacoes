import React, {useState, useEffect} from 'react'

import { IconContext } from "react-icons";
import { WiStars } from "react-icons/wi";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import {Drawer, List, ListItem, ListItemIcon, ListItemText, Divider} from '@material-ui/core';

import './Header.css'

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
}

export default function Header(){
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    
    useEffect(() => {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    if (windowDimensions.width > 850) return <DesktopHeader/>
    else return <MobileHeader/>
}

function DesktopHeader(){
    return (
        <div className='Header'>
            <div className='SiteLogo'>
                <IconContext.Provider value={{ size: '1.8em' }}>
                    <WiStars />
                </IconContext.Provider>
                <div className='SiteName'>
                    CAROLÍTICOS
                </div>
            </div>
            <div className='ToolBar'>
                <div>Home</div>
                <div>Sobre Nos</div>
                <div><u>Teste de aura</u></div>
            </div>
            <div className='SocialMedia'>
                <IconContext.Provider value={{ size: '1.8em', color: '#ffff'}}>
                    <FaFacebook />
                </IconContext.Provider>
                <IconContext.Provider value={{ size: '1.8em', color: '#ffff'}}>
                    <FaInstagram />
                </IconContext.Provider>
            </div>
        </div>
    )
}

function MobileHeader(){
    const [drawer, setDrawer] = useState(false)


    function handleDrawerOpen() {
      setDrawer(true)
    }
  
    function handleDrawerClose() {
      setDrawer(false)
    }

    return (
        <div className='Header'>
            <div className='SiteLogo' style={{width: '70%'}}>
                <IconContext.Provider value={{ size: '1.8em' }}>
                    <WiStars />
                </IconContext.Provider>
                <div className='SiteName'>
                    CAROLÍTICOS
                </div>
            </div>
            
            <IconContext.Provider value={{ size: '1em', color: '#ffff'}} >
                <AiOutlineMenu onClick={handleDrawerOpen} style={{marginRight: '20px'}}/>
            </IconContext.Provider>
            <SideBar drawer={drawer} handleDrawerClose={handleDrawerClose}/>
        </div>
    )
}

function SideBar(props){
    return(
        <Drawer anchor='right' open={props.drawer} onClose={props.handleDrawerClose} >
            <List>
                <ListItem button >
                    <ListItemText>HOME</ListItemText>
                </ListItem>

                <Divider/>

                <ListItem button >
                    <ListItemText>SOBRE NOS</ListItemText>
                </ListItem>

                <Divider/>

                <ListItem button >
                    <ListItemText>TESTE DE AURA</ListItemText>
                </ListItem>


            </List>
        </Drawer>
    )
}