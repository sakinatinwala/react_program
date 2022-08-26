import { Queue } from "../components/queue/queue";
import { useState } from "react";

export const Queues = () => {
    const [stackvalues, setStackValues] = useState ([1,4,6,8]);
    const size = 5;
    const enqueue = (value) => {
        if (stackvalues.length < size) {
            setStackValues([...stackvalues,value])
        }
    }
    
    const dequeue = () => {
        if (stackvalues.length > 0) {
            setStackValues(stackvalues.slice(0, -1))
        }
            if(stackvalues.length === 0) {
                alert ("All elements are successfully removed in Queue!"); 
           } 
        
    }
    
    const peek = () => {
        if (Queues.length > 0) {
        return stackvalues[Queues.length - 1];
        }
    }
    
    return (
        <div className="grid-rows-2 justify-center items-center">
            <span><h1><i> Queue : </i></h1></span>
            <div className="grid-cols-2 m-5">
            <input type="text" id="text1" placeholder="Enter of Node" /> <br />
                <button variant="secondary"
                onClick={() => {
                    let value = document.querySelector("#text1").value;
                    console.log(value);
                    enqueue(value);
                }}>
                    Add to Queue..
                </button>
            </div>
            
            <div className="grid-cols-2 m-5">
                <button onClick={() => dequeue()}>
                    Remove from Queue..
                </button>
                
            </div>
            <br />
            <div className="grid-cols-2 justify-center m-5">
                <Queue values={stackvalues} />
                {peek()}
            </div> 
        </div>
    )
}