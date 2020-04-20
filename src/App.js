import React from 'react';

import Post from './component/Post';
import ListPost from './component/ListPost';
import Header from './component/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <div style={{padding:'15px'}}>
        <Post></Post>
        <ListPost></ListPost>
      </div>
    </div>
  );
}

export default App;
