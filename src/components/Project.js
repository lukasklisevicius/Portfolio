import React from "react";
import '../styles/Project.scss'
import {motion} from 'framer-motion/dist/framer-motion'
import { Link } from "react-router-dom"


function Project(props){
    console.log(props)
    return(
        <>
        <div className="con project">
            <div className="text">
                <h2>{props.project.project.projectname}</h2>
                <p>{props.project.tags.nodes.map((tag,id) =>{
                    return(<span key={id}>{tag.slug} </span>)
                })}</p>
                <p>{props.project.project.description}</p>
                <div className="buttons">
      <motion.div className="btn" whileTap={{scale:0.9}}  whileHover={{scale:1.1,transition:{duration:0.1}}}>
      <Link target={"_blank"} to={props.project.project.linktopage}>Preview</Link>
      </motion.div>
      <motion.div className="btn white" whileTap={{scale:0.9}}  whileHover={{scale:1.1,transition:{duration:0.1}}}>
        <Link target={"_blank"} to={props.project.project.linktogithub}>Github</Link>
      </motion.div>
      </div>
            </div>
            <div className="project-img">
      <img src={props.project.project.image.mediaItemUrl} alt={`project-mockup ${props.project.project.image.mediaItemUrl}`}></img>
    </div>

        </div>
        </>
    )

}

export default Project