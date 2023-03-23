import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useInView } from 'react-intersection-observer';

import './styles/Navbar.scss'
export default function Navbar(props) {
  const [actve,setActive] = useState(false)
  const handleClick = () =>{
    setActive(!actve)
  }

  return (
    <nav className={`nav ${actve?'active':''}`}>
      <button onClick={handleClick}>menu</button>
      <ul>
        {props.pages.map((page)=>{
          if(page.node.slug === 'home'){return(<CustomLink key={page.node.pageId} to='/'>{page.node.slug}</CustomLink>)}
          return(<CustomLink key={page.node.pageId} to={`/${page.node.slug}`}>{page.node.slug}</CustomLink>)
        })}
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  const { ref: myRef, inView: myElementIsVisible } = useInView();

  return (
    <li ref={myRef} className={`nav-link ${isActive ? "active" : ""} ${myElementIsVisible?'nav-link-anim':''}`}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}