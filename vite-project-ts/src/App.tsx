import { Header } from './components/Header.tsx';
import { Sidebar } from './components/Sidebar.tsx';
import { Post, PostType } from './components/Post.tsx'


import styles from './App.module.css';

import './global.css';


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/devsophya.png',
      name: 'Sophya Damiazo',
      role: 'FullStack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉 sophya.design/doctorcare' },
    ],
    publishedAt: new Date ('2025-04-20 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/GustavoVieiraa.png',
      name: 'Gustavo Vieira',
      role: 'FullStack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: '👉 sophya.design/doctorcare' },
    ],
    publishedAt: new Date ('2025-04-27 21:00:00')
  },
];


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
