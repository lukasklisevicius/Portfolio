import React from "react"
// import { motion } from "framer-motion"
import {motion} from 'framer-motion/dist/framer-motion'
import Skill from "../components/Skill"
import "../styles/Skills.scss"



function Skills(props) {
  console.log(props.skills)
  return(
    <motion.div className="container"
    // initial={{height:'10%'}}
    // animate={{height:'100%',transition:{duration:0.3}}}
    // exit={{height:'10%', transition:{duration:0.3}}}
>
<motion.div
className='skills-con'
initial={{opacity:0}}
animate={{opacity:1,transition:{duration:0.3,delay:0.3}}}
exit={{opacity:0,transition:{duration:0.3,delay:-0.3}}}
>

    <Skill image={props.skills.skill1image.mediaItemUrl} header={props.skills.skill1header} text={props.skills.skill1desc}/>
    <Skill image={props.skills.skill2image.mediaItemUrl} header={props.skills.skill2header} text={props.skills.skill2desc}/>
    <Skill image={props.skills.skill3image.mediaItemUrl} header={props.skills.skill3header} text={props.skills.skill3desc}/>
    <Skill image={props.skills.skill4image.mediaItemUrl} header={props.skills.skill4header} text={props.skills.skill4desc}/>
    <Skill image={props.skills.skill5image.mediaItemUrl} header={props.skills.skill5header} text={props.skills.skill5desc}/>
    <Skill image={props.skills.skill6image.mediaItemUrl} header={props.skills.skill6header} text={props.skills.skill6desc}/>


</motion.div>
</motion.div>
  )
  }

  export default Skills