import React from 'react';

import Header from './component/Header';
import Post from './component/Post';
import ListPost from './component/ListPost';

function Page() {
  return (
    <div>
      <div style={{padding:'15px'}}>
        <Post></Post>
        <ListPost></ListPost>
      </div>
    </div>
  );
}

export default Page;