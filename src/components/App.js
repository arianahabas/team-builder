import React, { useState, useEffect } from 'react';
import {v4 as uuid } from 'uuid'
import './App.css';
import Member from './MemberForm'

const initialMemberList = [
  {
    id: uuid(),
    name: 'Homer',
    age: '40',
    food: 'donut',
    role: 'father',
  }
]

const initialFormValues = {
  //Text inputs//
  name: '',
  age: '',
  food: '',
  //Dropdown//
  role: '',
}

const fakeAxiosGet = () => {
  return Promise.resolve({ status: 200, success: true, data: initialMemberList })
}
const fakeAxiosPost = (url, { name, age, food, role }) => {
  const newMember = { id: uuid(), name, age, food, role }
  return Promise.resolve({ status: 200, success: true, data: newMember })
}

export default function App() {
  const [members, setMembers] =useState([])

  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    const updatedFormValues ={... formValues, [inputName] : inputValue }
    setFormValues(updatedFormValues)
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      age: formValues.age.trim(),
      food: formValues.food.trim(),
      role: formValues.role,
    }
    if (!newMember.name || !newMember.age || !newMember.food || !newMember.role) return

    fakeAxiosPost('fakeapi.com',newMember)
      .then(res =>{
        const memberFromAPI = res.data
        setMembers([memberFromAPI, ...members])
        setFormValues(initialFormValues)
      })
    
  }

  useEffect(() => {
    fakeAxiosGet('fakeapi.com')
    .then(res => setFriends(res.data))
  },[])

  return (
    
    <div className="App">
      <header><h1>Team Members</h1></header>
    </div>
  );
}

export default App;
