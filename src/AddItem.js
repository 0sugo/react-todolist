import React from 'react'
import { FaPlus } from 'react-icons/fa';

export const AddItem = ({newItem ,setNewItem,handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addItem'>Add Item</label>
        <input autoFocus id='addItem' type='text' placeholder='Add Item' required value={newItem} onChange={(e) => setNewItem(e.target.value)}></input>
        <button type='submit' iria-label='Add Item'><FaPlus/></button>

    </form>
  )
}

export default AddItem;