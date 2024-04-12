
import { useState } from "react";


export default function Form({ onAddItems }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuntity] = useState(1);
    // we want items data to sibling component PackingList but we can't send through
    // props so we lift the state means we go to close parent state and addthis code to their
    // const [items, setItems] = useState([]);
  
    function handleSubmit(e) {
      e.preventDefault();
  
      if (!description) return;
      const newItem = { description, quantity, packed: false, id: Date.now() };
  
      onAddItems(newItem);
      setDescription("");
      setQuntity(1);
    }
  
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for Your Trip </h3>
        <select
          value={quantity}
          onChange={(e) => setQuntity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item.."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </form>
    );
  }