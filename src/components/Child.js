import React,{useState} from "react";

const Child=({value, func})=>{
    // console.log(func)
    function removeItem(e){
        //    console.log(typeof(e.target.className))
        let resultValue= value.filter((element,ind)=>{
                  return e.target.className!=ind
        })
        // console.log(resultValue);
        func(resultValue)
    }
    return (
        <div className="child">
            
            <h3>Child Component</h3>
            <ul>
                 {
                 value.map((elem,index)=>{
                    // console.log(index)
                    return(
                        
                        <li>{elem} <button className={index} onClick={removeItem}>Remove</button></li>
                    )
                       
                })
                  } 
                
            </ul>
        </div>
    )
}
export default Child;