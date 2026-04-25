import { useEffect, useState } from "react";
import axios from "axios";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";

function App() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const res = await axios.get("http://localhost:5000/items");
    setItems(res.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h1>Item Manager</h1>
      <ItemForm onAdd={fetchItems} />
      <ItemList items={items} />
    </div>
  );
}

export default App;