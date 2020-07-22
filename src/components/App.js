
import React, { useState, useEffect } from 'react'
import Players from './Players'
import PlayerForm from './PlayerForm'


const initialPlayersList = [
  {
    name: 'Michael Jordan',
    number: '23',
    position: 'Guard',
  },
]
const initialFormValues = {
  ///// TEXT INPUTS /////
  name: '',
  number: '',
  ///// DROPDOWN /////
  position: '',
}

const fakeAxiosGet = () => {
  return Promise.resolve({ status: 200, success: true, data: initialPlayersList })
}
const fakeAxiosPost = (url, { name, number, position }) => {
  const newPlayer = { name, number, position }
  return Promise.resolve({ status: 200, success: true, data: newPlayer })
}
export default function App () {
  const [players, setPlayers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    const updatedFormValues = { ...formValues, [inputName]: inputValue }
    setFormValues(updatedFormValues)
  }
  const submitForm = () => {
    const newPlayer = {
      name: formValues.name.trim(),
      number: formValues.number.trim(),
      position: formValues.position,
    }
  
    if (!newPlayer.name || !newPlayer.number || !newPlayer.position) return

    fakeAxiosPost('fakeapi.com', newPlayer)
      .then(res => {
        const playerFromAPI = res.data
        setPlayers([playerFromAPI, ...players])
        setFormValues(initialFormValues)
      })
  }
    
  
    useEffect(() => {
      fakeAxiosGet('fakeapi.com').then(res => setPlayers(res.data))
    }, [])

  return(
    <div className='App'>
      <div className='form'>
        <PlayerForm
        values ={formValues}
        update={updateForm}
        submit={submitForm}
        />
    </div>
    <div className='playerCard'>
      {
        players.map(player => {
          return (
            <Players key={player.id} details={player} />
          )
        })
      }
      </div>
    </div>
  )
}

