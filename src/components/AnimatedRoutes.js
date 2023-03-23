import React from "react"
import Skills from "../pages/Skills"
import Home from "../pages/Home"
import About from "../pages/About"
import { Route, Routes, useLocation } from "react-router-dom"
import Portfolio from "../pages/Portfolio"
import Contact from "../pages/Contact"

import {AnimatePresence} from 'framer-motion/dist/framer-motion'

function AnimatedRoutes(props){
    const location = useLocation()
    return(
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home home={props.pages.homePage.homePage} />} />
            <Route path="/about" element={<About about={props.pages.aboutPage.aboutpage}/>} />
            <Route path="/skills" element={<Skills skills={props.pages.skillsPage.skills} />}/>
            <Route path="/portfolio" element={<Portfolio projects={props.pages.posts.nodes}/>}/>
            <Route path="/contact" element={<Contact contact={props.pages.contactPage.contactpage} />}/>
        </Routes>
      </AnimatePresence>
    )
}

export default AnimatedRoutes