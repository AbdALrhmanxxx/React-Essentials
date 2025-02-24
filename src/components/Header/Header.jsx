import React from 'react'
import reactImage from '../../assets/react-core-concepts.png'
import './Header.css'
export default function Header() {
    const reactDescription = ['Fundamental','Crucial','Core']
    function genRandomlInt(max){
        return Math.floor(Math.random()*(max+1))
    }
 const description = reactDescription[genRandomlInt(2)];
  return (
    <div>
      <header>
        <img src={reactImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    </div>
  );
}
