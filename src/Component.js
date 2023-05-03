import ItemList from './ItemList';

export default function Component({ handleCheck, handleDelete, items }) {
  return (
    <div>
      {(items.length === 0) ? 'All Items done!!!!' : '' }
      <ItemList items={items} handleCheck={handleCheck} handleDelete={handleDelete} />

    </div>
  );
}
