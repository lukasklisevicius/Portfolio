import React from "react"
import Navbar from "./Navbar"
import './styles/App.scss'
import AnimatedRoutes from "./components/AnimatedRoutes"
import { useState,useEffect } from "react"



function App() {
  const [graph,setGraph] = useState([])
  const [isLoading, setLoading] = useState(true);

  const qr = {
    query: `query NewQuery {
      pages {
        edges {
          node {
            pageId
            slug
          }
        }
      }
      homePage: pageBy(pageId: 43) {
        slug
        homePage {
          name
          prof
          shortText
          profilepic {
            mediaItemUrl
          }
        }
      }
      aboutPage: pageBy(pageId: 41) {
        slug
        aboutpage{
          pageName
          text1
          text2
          text3
          image{
            mediaItemUrl
          }
        }
    
        
      }
      skillsPage: pageBy(pageId: 39) {
        slug
        skills{
          pageheader
          skill1image {
            mediaItemUrl
          }
          skill1header
          skill1desc
          skill2image{
            mediaItemUrl
          }
          skill2header
          skill2desc
          skill3image{
            mediaItemUrl
          }
          skill3header
          skill3desc
          skill4image{
            mediaItemUrl
          }
          skill4header
          skill4desc
          skill5image{
            mediaItemUrl
          }
          skill5header
          skill5desc
          skill6image{
            mediaItemUrl
          }
          skill6header
          skill6desc
        }
      }
      contactPage: pageBy(pageId:35){
        slug
        contactpage{
          pageheader
          text
          linktogithub
          linktolinkedin
          email
          image{
            mediaItemUrl
          }
        }
      }
      posts{
        nodes{
          postId
          slug
          project{
            projectname
            description
            linktopage
            linktogithub
            image{
              mediaItemUrl
            }
          }
          tags{
            nodes{
              slug
            }
          }
        }
      }
    }`
  }

  const getData = () =>{
    fetch('http://localhost/portfolio/graphql',{
      method: 'post',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(qr),
    })
    .then(res => res.json())
    .then(data =>{setGraph(data.data);setLoading(false)})
    .catch((err) => {
      console.log(err);
    });
  }

//   console.log(graph)

  useEffect(()=>{
    getData()
  },[])

  if(isLoading){return(<div>loading...</div>)}


  return (
    <>
    <Navbar pages={graph.pages.edges}/>
      <div className="spec">
        <AnimatedRoutes pages={graph} />
        </div>
    <div className="footer">Created by Lukas Kliševičius</div>
    </>
  )
}

export default App 