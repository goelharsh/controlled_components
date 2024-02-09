
import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({firstName:"", lastName:"", email:""})

  function changeHandler(event){
    const {name, value, type, checked} = event.target
    setFormData(prevFromData=>{
      return {
        ...prevFromData,
        [name]: type === "checkbox" ? checked : value 
      }
    })
  }

  function submitHandler(event){
    event.preventDefault();
    console.log(formData);
  }
  return (
    <div className='w-full h-screen flex flex-col items-center mt-4'>
      <div className='w-[400px] border'>
        <label>First Name</label>
        <br></br>
        <input
          className='mt-1'
          placeholder='Harsh'
          type='text'
          name='firstName'
          value={formData.firstName}
        />
        <br/>
        <label>Last Name</label>
        <br></br>
        <input
          className='mt-1'
          placeholder='Goel'
          type='text'
          name='lastName'
          value={formData.lastName}
        />
        <br/>
        <label>Email</label>
        <br/>
        <input
          className='mt-1'
          placeholder='harshgoel4@gmai.com'
          type='email'
          name='email'
          value={formData.email}
        />

      </div>
    </div>
  );
}

export default App;
