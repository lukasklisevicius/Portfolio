import React from "react"
// import { animate, motion } from "framer-motion"
import { Link } from "react-router-dom"
import {motion} from 'framer-motion/dist/framer-motion'

import '../styles/Home.scss'

export default function Home(props) {
    return (
      <motion.div className="container"
      // initial={{height:'10%'}}
      // animate={{height:'100%',transition:{duration:0.3}}}
      // exit={{height:'10%', transition:{duration:0.3}}}
>
<motion.div
className="con"
  initial={{opacity:0}}
  animate={{opacity:1,transition:{duration:0.3,delay:0.3}}}
  exit={{opacity:0,transition:{duration:0.3,delay:-0.3}}}
    >
        <div className="image">
            <img src={props.home.profilepic.mediaItemUrl} alt={`profile`}></img>
        </div>
        <div className="text">
            <h1>{props.home.name}</h1>
            <h2>{props.home.prof}</h2>
            <p>{props.home.shortText}</p>
            <motion.div className="btn" whileTap={{scale:0.9}}  whileHover={{scale:1.1,transition:{duration:0.1}}} initial={{opacity:0,scale:1.2}} animate={{opacity:1,scale:1,transition:{duration:0.3}}}>
                <Link to='/about'>about</Link>
            </motion.div>
        </div>
        
        
        
        
        </motion.div>
  </motion.div>

    )
  }