import React from 'react';

// A simple stateless functional component
const Home = () => {

  const handleClick=()=>{
    console.log("hello guys");
  }

  return (
    <div ClassName="home">
      <h1>Home page!</h1>
      <button onClick={handleClick}> click me</button>
    </div>
  );
};

export default Home;