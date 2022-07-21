import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const [itemName, setItemName] = useState('') //a piece of state for each input
  const [itemCategory, setItemCategory] = useState('') //a piece of state for each input

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitted');
    const newItem = {id:uuid(), name:itemName, category:itemCategory};
    console.log(newItem);
    props.onItemFormSubmit(newItem);
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}> {/*WHEN WE PRESS SUBMIT IT WILL CREATE A NEW STATE WITH THE ENTERED VALUES*/}
      <label>
        Name:
        <input type="text" name="name" onChange={(event) => {setItemName(event.target.value)}}/> {/*on change event listerner with callback function*/}
      </label>

      <label>
        Category:
        <select name="category" onChange={(event) => {setItemCategory(event.target.value)}}> {/*on change event listerner with callback function*/}
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
