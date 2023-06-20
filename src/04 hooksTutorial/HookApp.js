import React, { useReducer } from 'react'
import UserForm from './hooksComponentCustom/UserForm';



function HookApp() {


  return (
    <div className='container'>
      <h1>Hooks - with Custom Hook </h1>
      <div style={{ padding: "30px" }}>
        <UserForm />
      </div>
    </div >
  );
}

export default HookApp;
