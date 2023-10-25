import React from 'react';
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

const PostForm = () => {

    const [post, setPost] = useState({ title: '', body: '' });

    // const bodyInputRef = useRef(); для неуправляемого компонента

    return (
        <div>
            <form>
        {/* Управляемый компонент */}
        <MyInput
          value={post.title}
          onChange={event => setPost({ ...post, title: event.target.value })}
          type="text"
          placeholder="Название поста"
        />
        <MyInput
          value={post.body}
          onChange={event => setPost({ ...post, body: event.target.value })}
          type="text"
          placeholder="Описание поста"
        />
        {/* Неуправляемый компонент */}
        {/* <MyInput
          ref={bodyInputRef}
          type="text"
          placeholder="Описание поста"
        /> */}
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
        </div>
    );
};

export default PostForm;