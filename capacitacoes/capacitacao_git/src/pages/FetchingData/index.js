import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Fetching() {
  const [post, setPost] = useState({})
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdfromButtonClick] = useState(1);

  const handleClick = () => {
    setIdfromButtonClick(id);
  }

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then(res => {
        console.log(res);
        setPost(res.data)
      })
      .catch(err => {
        console.log(err);

      })
  }, [idFromButtonClick])

  return (
    <div className="container">
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>Fetch post</button>
      <div>{post.title}</div>
    </div>
  );
}
