import { Header } from "./components/Header"
import {Post} from "./components/Post"
import { Sidebar} from "./components/Sidebar"

import './global.css'
import styles from './App.module.css'

// author: {avatara_url: "" name:"" , role: ""}
//publishedAt: Date
//content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/gabriel-ads.png",
      name: "Gabriel Alves",
      role: "Software Engineer"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      {type: 'link', content: 'jane.design/doctorcare'},
    
    ],
    publishedAt: new Date('2024-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/gabriel-ads.png",
      name: "Lucas Nunes",
      role: "Cyber Security"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      {type: 'link', content: 'jane.design/doctorcare'},
    
    ],
    publishedAt: new Date('2024-05-03 20:00:00')
  }
]

function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(()=>{
            
          })}
        </main>
      </div>
    </div>
  )
}

export default App

