import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post'

import styles from './App.module.css';

import './global.css';


export function App() {
  return (
    <div>

      <Header />


      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author=" Sophya Damiazo"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet tempore accusamus, excepturi suscipit, animi molestiae dolore cum itaque laudantium, sequi minus odit."
          />
          <Post
            author=" Gustavo Vieira"
            content="Um novo post muito legal"
          />
        </main>
      </div>
    </div>
  )
}
