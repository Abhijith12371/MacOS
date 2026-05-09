import React from 'react'
import { NavItemLinks } from '../constants'
import { navIcons } from '../constants'
import dayjs from 'dayjs'
const Navbar = () => {
    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="logo" />
                <p>Shelly's Portfolio</p>
                <ul>
                {
                    NavItemLinks.map(({id,name,link})=>(
                        <a key={id} href={link}>{name}</a>
                    ))
                }
                </ul>
            </div>
            <div>
                <ul>
                    {
                        navIcons.map(({id,img})=>(
                        <li key={id}>
                        <img  src={img}/>
                    </li>
                    ))
                    }
                </ul>
                <time >{
                    dayjs().format("ddd MMMM D hh:mm A")
                }</time>
                
            </div>
        </nav>
    )
}

export default Navbar
