import React from "react"
// import { motion } from "framer-motion"
import { motion} from 'framer-motion/dist/framer-motion'
import '../styles/Skill.scss'


function Skill(props) {
    return (
        <>
        <motion.div whileHover={{opacity:1,trasition:{duration:0.3},filter:'grayscale(0)',scale:1.1}} className="skill">
            <img src={props.image} alt={`skill-logo ${props.image}`}></img>
            <h3>{props.header}</h3>
            <p>{props.text}</p>
        </motion.div>
        </>
    )
  }
  
  export default Skill