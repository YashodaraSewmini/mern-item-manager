import { useState } from "react";
import axios from "axios";

function ItemForm({ onAdd }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = async () => {
    await axios.post("http://localhost:5000/items", {
      name,
      quantity
    });
    onAdd();
  };

  return (
    <div>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Quantity" onChange={(e) => setQuantity(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default ItemForm;