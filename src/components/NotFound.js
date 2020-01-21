import React from 'react';
import friend from '../images/friend.jpeg';

const NotFound = () => {
  return (
    <div className="empty-screen">
      <img src={friend} alt="sweet dog"></img>
      <p>Use the form to create a new todo!</p>
    </div>
  );
};

export default NotFound;