import React, { useState, useRef } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PosrItem";
import './styles/App.css';
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'JavaScript 2', body: 'Description' },
    { id: 3, title: 'JavaScript 3', body: 'Description' },
    { id: 4, title: 'JavaScript 4', body: 'Description' },
  ])

 const addNewPost = (event) => {
    event.preventDefault();
    setPosts([...posts, {...post, id: Date.now()}])
    setPost({ title: '', body: '' })
  }

  return (
    <div className="App">
      <PostForm/>
      <PostList posts={posts} title={'Посты про JS'} />
    </div>
  );
}

export default App;
