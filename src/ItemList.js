import LineItem from './LineItem';

const itemList = ({handleCheck,handleDelete,items}) => {
  return (
    <ul>
    {items.map((item) =>(
      <LineItem key={item.id} handleCheck={handleCheck} handleDelete={handleDelete} item={item}/>
    ))}

  </ul>
  )
}

export default itemList;