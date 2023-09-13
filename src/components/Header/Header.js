 
import React from 'react';
import './Header.scss'

const Header = () => {
  return (
    <section id="home" className="flex flex-col items-center justify-center h-screen md:flex-row md:h-[700px]">
      <div className="flex flex-col items-start justify-center text-left p-8 md:w-1/2">
        <h1 className="text-4xl font-bold">
          Hey There 👋 I am 
          <span className="text-blue-500">Daniel Jack</span>
        </h1>
        <h2 className="text-2xl mt-2">
          Professional 
          <span className="text-blue-400">Graphic Designer</span>
        </h2>
        <p className="text-lg mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum consequat convallis.
        </p>
        <div className="mt-8">
        <a href="#" onClick={(e) => { e.preventDefault();  }}>Contact Me</a>
        <a href="#" onClick={(e) => { e.preventDefault();  }}>Learn More</a>


        </div>
      </div>
      <div className="flex items-end justify-end w-full md:w-1/2">
        <img src="images/hero-image.png" alt="image" className="w-1/2" />
      </div>
    </section>
  );
};

export default Header;
