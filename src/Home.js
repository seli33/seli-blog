import React from 'react';

// A simple stateless functional component
const Home = () => {

  const handleClick= () =>{
    console.log('hello guys');
  }

  const handleClickAgain=(name)=>{
    console.log("hello " +name);

  }
  return (
    <div className="home">
      <h1>Home page!</h1>
      <button onClick= {handleClick}> click me</button>
      <button onClick= {()=>handleClickAgain('seli')}> click me again </button>
    </div>
  );
};

export default Home;