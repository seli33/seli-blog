import React from 'react';
import {useState } from 'react';
import BlogList from './BlogList';

// A simple stateless functional component
const Home = () => {
  const[blogs,setBlogs]=useState([
     {
    id: 1,
    title: "The Beauty of Simplicity",
    body: "Minimalism in design and code helps maintain clarity and reduces complexity in projects.",
    author: "Selina"
  },
  {
    id: 2,
    title: "Why React is So Popular",
    body: "React’s component-based structure and virtual DOM make building modern web apps fast and efficient.",
    author: "mario"
  },
  {
    id: 3,
    title: "Mastering CSS Flexbox",
    body: "Flexbox simplifies layout design by providing powerful alignment and distribution tools for elements.",
    author: "Jamie"
  },
  {
    id: 4,
    title: "Staying Productive as a Developer",
    body: "Learn to manage your time, use version control effectively, and take breaks to avoid burnout.",
    author: "mario"
  },
  {
    id: 5,
    title: "Exploring AI in Everyday Apps",
    body: "From chatbots to smart recommendations, AI is transforming how we interact with technology daily.",
    author: "Riley"
  }
  ]);
 
  
  return (
    <div className="home">
     <BlogList blogs={blogs} title="All Blogs" />
     <BlogList blogs={blogs.filter((blog)=> blog.author==='mario')} title="Mario's Blogs" />
           
     
    </div>
  );
}

export default Home;