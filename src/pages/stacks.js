import { Stack } from "../components/stack/stack";
import { useState } from "react";

export const Stacks = () => {
    const [stackvalues, setStackValues] = useState ([1,4,6,8]);
    const size = 5;
    const push = (value) => {
        if (stackvalues.length < size) {
            setStackValues([...stackvalues,value])
        }
    }
    
    const pop = () => {
        if (stackvalues.length > 0) {
            setStackValues(stackvalues.slice(0, -1))
        }
            if(stackvalues.length === 0) {
                alert ("All elements are successfully removed in stack!"); 
           } 
        
    }
    
    const peek = () => {
        if (Stacks.length > 0) {
        return stackvalues[Stacks.length - 1];
        }
    }
    
    return (
        <div className="grid-rows-2 justify-center items-center">
            <span><h1><i> Stack : </i></h1></span>
            <div className="grid-cols-2 m-5">
            <input type="text" id="text1" placeholder="Enter of Node" /> <br />
                <button variant="secondary"
                onClick={() => {
                    let value = document.querySelector("#text1").value;
                    console.log(value);
                    push(value);
                }}>
                    Add to Stack..
                </button>
            </div>
            
            <div className="grid-cols-2 m-5">
                <button onClick={() => pop()}>
                    Remove from Stack..
                </button>
                
            </div>
            <br />
            <div className="grid-cols-2 justify-center m-5">
                <Stack values={stackvalues} />
                {peek()}
            </div> 
        </div>
    )
}