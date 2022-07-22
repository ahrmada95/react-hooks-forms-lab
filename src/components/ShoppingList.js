import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import itemData from "../data/items";

function ShoppingList() {
  const [items, setItems] = useState(itemData); //for adding new items
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [userCategory, setUserCategory] = useState("All")

  const onItemFormSubmit = (newItem) => {
    setItems([...items,newItem]);
  }
  
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setUserCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if(userCategory === "All" || userCategory === "") {
      if(selectedCategory === "All") {
        return true;
      }
      else {
        return item.category === selectedCategory
      }
    } else {
      return item.name.toLowerCase().includes(userCategory)
    }
  });

  return (
    <div className="ShoppingList">
      <ItemForm onFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
