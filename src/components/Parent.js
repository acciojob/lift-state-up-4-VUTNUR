import React,{useState} from "react";
import Child from "./Child"

const Parent=()=>{
     let[cartItems,setCartItems]=useState([]);
     let[cartItemsName, setCartItemsName]=useState("");
     let[cartItemsPrice, setCartItemsPrice]=useState("");
     function addName(e){
        setCartItemsName(e.target.value)
     }
     function addPrice(e){
        setCartItemsPrice(e.target.value)
     }
     function addToCart(){
      let result=cartItemsName+" - "+"$"+cartItemsPrice
        setCartItems([...cartItems,result])
     }
    return (
        <div className="parent">
           <h1>Parent Component</h1>
           <label for="itemName">Item Name:</label>
           <input type="text" id="itemName" onChange={addName}/>
           <label for="itemPrice">Item Name:</label>
           <input type="number" id="itemPrice" onChange={addPrice}/>
           <button onClick={addToCart}>Add Item</button>
           <Child value={cartItems} func={setCartItems}/>
        </div>
    )
}
export default Parent;