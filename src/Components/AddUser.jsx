import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const data = [{ id: '', name: '', email: '', phone: '' }]

const AddUser = ({ addUser }) => {

  const [formData, setFormdata] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4().slice(0, 8);
    const data = { id, ...formData }
    console.log(data)
    addUser(data)
    setFormdata(data)

  }


  return (
    <div className='mx-auto m-8 md:w-2/3 shadow-md'>
      <form className='' onSubmit={handleSubmit}>
        <div className='flex flex-col'>
          <input required type='text' placeholder='Name' value={data.name} onChange={(e) => setFormdata({ ...formData, name: e.target.value })} className='w-3/5 m-auto my-2 px-3 border rounded-md' />
          <input required type='email' placeholder='Email' value={data.email} onChange={(e) => setFormdata({ ...formData, email: e.target.value })} className='w-3/5 my-2 m-auto px-3 border rounded-md' />
          <input required type='number' placeholder='Phone' value={data.phone} onChange={(e) => setFormdata({ ...formData, phone: e.target.value })} className='w-3/5 my-2 m-auto px-3 border rounded-md' />
          <input type='submit' value='Submit' className='border w-4/5 md:w-1/5 my-2 rounded-lg m-auto' />
        </div>
      </form>
    </div>
  )
}

export default AddUser