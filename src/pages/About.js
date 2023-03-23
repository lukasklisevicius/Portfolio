import React from "react"
// import { motion } from "framer-motion"
import { motion} from 'framer-motion/dist/framer-motion'
import { Link } from "react-router-dom"


export default function About(props) {
    return (
      <motion.div className="container"
      // initial={{height:'10%'}}
      // animate={{height:'100%',transition:{duration:0.3}}}
      // exit={{height:'10%', transition:{duration:0.3}}}
>
<motion.div
className='con about'
  initial={{opacity:0}}
  animate={{opacity:1,transition:{duration:0.3,delay:0.3}}}
  exit={{opacity:0,transition:{duration:0.3,delay:-0.3}}}
  >
    <div className="text" style={{paddingRight:50}}>
      <h1>{props.about.pageName}</h1>
      <p>{props.about.text1}</p>
      <p>{props.about.text2}</p>

      <div className="buttons">
      <motion.div className="btn" whileTap={{scale:0.9}}  whileHover={{scale:1.1,transition:{duration:0.1}}}>
      <Link to="/skills">skills</Link>
      </motion.div>
      <motion.div className="btn white" whileTap={{scale:0.9}}  whileHover={{scale:1.1,transition:{duration:0.1}}}>
        <Link to="/portfolio">portfolio</Link>
      </motion.div>
      </div>



    </div>
    <div className="con-image">
      <img style={{width:'100%'}} src={props.about.image.mediaItemUrl} alt={`about`}></img>
    </div>
    
    
    </motion.div>
  </motion.div>
    )
  }