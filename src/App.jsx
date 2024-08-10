import { Header } from "./components/Header"
import {Post} from "./components/Post"
import { Sidebar} from "./components/Sidebar"

import './global.css'
import styles from './App.module.css'

function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
          author="Gabriel Alves" 
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed fuga aliquid quasi consequatur magnam alias sit accusantium, suscipit voluptatibus libero deserunt, quidem nam amet nihil, dignissimos atque. Quas, consectetur amet."
          />
          <Post 
            author="Lucas Nunes"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed fuga aliquid quasi consequatur magnam alias sit accusantium, suscipit voluptatibus libero deserunt, quidem nam amet nihil, dignissimos atque. Quas, consectetur amet."
          />
        </main>
      </div>
    </div>
  )
}

export default App

