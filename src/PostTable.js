import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostTable = () => {
  const [posts, setPosts] = useState([]);
  const [filterTopic, setFilterTopic] = useState('');
  const [filterDate, setFilterDate] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        // 1. Add word count to each post
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleTopicChange = (event) => {
    setFilterTopic(event.target.value);
  };

  const handleDateChange = (event) => {
    setFilterDate(event.target.value);
  };

  const filteredPosts = posts.filter(post => {
    //2. Write code here to filter posts by topic and date
    return post
  });

  //3. Write code here to sort posts by word count
  //4. Update CSS of the table to alternate row colors Odd # rows should be light grey (#ddd) and even # rows should be white (#fff)
  return (
    <div>
      <h1>Posts</h1>
      <div>
        <label>
          Filter by Topic:
          <input type="text" value={filterTopic} onChange={handleTopicChange} />
        </label>
        <label>
          Filter by Date:
          <input type="date" value={filterDate} onChange={handleDateChange} />
        </label>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Word Count</th>
          </tr>
        </thead>
        <tbody>
          {filteredPosts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>{post.wordCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostTable;