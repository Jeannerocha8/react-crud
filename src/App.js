import React from 'react';

import Post from './component/Post';
import ListPost from './component/ListPost';
import Header from './component/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Post></Post>
      <ListPost></ListPost>
    </div>
  );
}

export default App;
