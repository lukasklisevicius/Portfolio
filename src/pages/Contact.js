import React from "react"
// import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'

import { motion} from 'framer-motion/dist/framer-motion'
import { Link } from "react-router-dom"
import '../styles/Contact.scss'


function Contact(props) {

    return (
      <motion.div className="container"
      // initial={{height:'10%'}}
      // animate={{height:'100%',transition:{duration:0.3}}}
      // exit={{height:'10%', transition:{duration:0.3}}}
>
<motion.div
className="con contact"
  initial={{opacity:0}}
  animate={{opacity:1,transition:{duration:0.3,delay:0.3}}}
  exit={{opacity:0,transition:{duration:0.3,delay:-0.3}}}

  >

        <div className="text">
        <h1>{props.contact.pageheader}</h1>
      <p>{props.contact.text}</p>
      <Link to={`mailto:${props.contact.email}`}><span className="icon-link"><FontAwesomeIcon icon={faEnvelope}/></span> {props.contact.email}</Link>

      <div className="social">
      <Link target={"_blank"} to={props.contact.linktogithub}><span className="icon-link"><FontAwesomeIcon icon={faGithubSquare} /></span> Github</Link>
      <Link target={"_blank"} to={props.contact.linktolinkedin}><span className="icon-link"><FontAwesomeIcon icon={faLinkedin}/></span> Linkedin</Link>
      </div>

      <div className="buttons">
      <div className="btn">
      {/* <Link to="/skills">skills</Link> */}
      </div>
      <div className="btn white">
        {/* <Link to="/portfolio">portfolio</Link> */}
      </div>
      </div>



    </div>
    <div className="con-image">
      <img src={props.contact.image.mediaItemUrl} alt={`contact`}></img>
    </div>

  </motion.div>
  </motion.div>
    )
  }
  
  export default Contact