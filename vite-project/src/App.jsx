import { Header } from './components/Header';
import { Post } from './Post'

import './global.css';

export function App() {
  return (
    <div>

      <Header />

      <Post 
        author=" Sophya Damiazo" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet tempore accusamus, excepturi suscipit, animi molestiae dolore cum itaque laudantium, sequi minus odit." 
      />
      <Post
        author=" Gustavo Vieira"
        content="Um novo post muito legal"
      />
    </div>
  )
}
