import React from "react"
// import { motion } from "framer-motion"
import { motion} from 'framer-motion/dist/framer-motion'
import '../styles/Portfolio.scss'


// import ManipulatingSwiper from "../components/ManipulatingSwiper"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper.scss'

// import required modules
import { Navigation } from "swiper";
import Project from "../components/Project";


function Portfolio(props) {

    return (
      <motion.div className="container portfolio"
      // initial={{height:'10%'}}
      // animate={{height:'100%',transition:{duration:0.3}}}
      // exit={{height:'10%', transition:{duration:0.3}}}
>
<motion.div
  className='con'
  initial={{opacity:0}}
  animate={{opacity:1,transition:{duration:0.3,delay:0.3}}}
  exit={{opacity:0,transition:{duration:0.3,delay:-0.3}}}
  >


<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {props.projects.map(project => {
      return(<SwiperSlide key={project.postId}><Project project={project}/></SwiperSlide>)
    })}
  </Swiper>
  </motion.div>
  </motion.div>
    )
  }

  export default Portfolio