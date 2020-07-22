import React from 'react'

export default function PlayerForm (props) {
    const { values, update, submit} = props 

    const onChange = evt =>{
        const name = evt.target.name
        const value = evt.target.value
        update (name,value)
    }
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }

    return (
        <div>
        <form onSubmit = {onSubmit}>
            <h1>Join the Team! 🏀</h1>
          <label htmlFor='nameInput'></label>
          <input
          id='nameInput'
          name='name'
          type='text'
          maxLength='20'
          placeholder='Full Name'
          value={values.name}
          onChange={onChange}
          />
          <br/>
          <label htmlFor='numberInput'></label>
          <input
          id='numberInput'
          name='number'
          type='number'
          maxLength='20'
          placeholder='Jersey Number'
          value={values.number}
          onChange={onChange}
          />
          <br/>
          <label >
            <select name='position' value={values.position} onChange={onChange}>
                <option value=''>Select your Position</option>
                <option value='Forward'>Forward</option>
                <option value='Center'>Center</option>
                <option value='Guard'>Guard</option>
            </select>
          </label>
          <br/>
          <button>Lets GO!!!</button> 
        </form>
        </div>
    )
}