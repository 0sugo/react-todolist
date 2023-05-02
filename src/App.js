import AddItem from './AddItem';
import Component from './Component';
import Footer from './Footer';
import Header from './Header';
import { useState } from "react";


function App() {
  const [items , setItems] = useState(JSON.parse(localStorage.getItem('listItems')));
  // localstorage
  const setAndSaveItems = (listItems)=>{
    setItems(listItems);
    localStorage.setItem('listItems',JSON.stringify(listItems));
  }
  // states
  const [newItem ,setNewItem]= useState('');
  
  // adding new
  const addItem = (item) => {
    const id =items.length ? items[items.length -1].id +1 : 1;
    const myNewItem = {id , checked:false , item}
    const listItems = [...items , myNewItem]
    setAndSaveItems(listItems);
  }


  const handleCheck = (id) =>{
    const listItems = items.map((item) =>item.id === id ? {...item,checked:!item.checked}: item);
    setAndSaveItems(listItems);
  }
  const handleDelete = (id) =>{
    const listItems = items.filter((item)=> item.id !== id );
    setAndSaveItems(listItems);
  }
  // handle submit
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!newItem) return ;
    addItem(newItem);
    setNewItem('');
    console.log(newItem);


  }

  return (
    <div className="App">
      <header className="App-header">
        <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit}/>
        <Header title='To-do list'/>
        <Component items ={items} setItems={setItems} handleCheck = {handleCheck} handleDelete = {handleDelete}/>
        <Footer length={items.length}/>
      </header>
    </div>
  );
}

export default App;
