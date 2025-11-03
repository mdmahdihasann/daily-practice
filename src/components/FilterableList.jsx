import { useState } from 'react';
import { foods, filterItems } from '../data/data';

export default function FilterableList() {
  const [query, setQuery] = useState('');
  const result = filterItems(foods, query)
  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <SearchBar  
        handleChange={handleChange}
        query={query}
      />
      <hr />
      <List items={result} />
    </>
  );
}

function SearchBar({handleChange, query}) {
  
  return (
    <label>
      Search:{' '}
      <input
        value={query}
        onChange={handleChange}
      />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map(food => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
