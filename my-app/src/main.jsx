import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';

const root= document.getElementById('root');
// const myName = "Vuong";
// const myAge = 18;
// const myInfo={
//   name:'Vuong',
//   age:18
// }

// function showInfo (myName){
//   return <p>Hello {myName.name}</p>
// }

// const ShowInfo =(myName)=>{
//   return <p>Hello {myName.name}</p>
// }

ReactDOM.render(
  <div>
      <App name="vuong"></App>
  </div>
  
,root)
