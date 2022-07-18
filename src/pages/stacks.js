import { Stack } from "../components/stack/stack";
import { useState } from "react";

export const Stacks = () => {
    const [stackvalues, setStackValues] = useState ([1,2,3]);

    const size = 5;
    const push = (value) => {
        if (stackvalues.length < size) {
            setStackValues([...stackvalues, 4])
        }
    }
    
    const pop = () => {
        if (stackvalues.length > 0) {
            setStackValues(stackvalues.slice(0, -1))
        }
    }
    
    const peek = () => {
        if (Stacks.length > 0) {
        return stackvalues[Stacks.length - 1];
        }
    }
    
    return (
        <div className="grid-rows-2 justify-center items-center">
            <div className="grid-cols-2 m-5">
                <button onClick={() => push()}>
                    Add to Stack..
                </button>
            </div>
            <div className="grid-cols-2 m-5">
                <button onClick={() => pop()}>
                    Remove from Stack..
                </button>
            </div>
            <div className="grid-cols-2 justify-center m-5">
                <Stack values={stackvalues} />
                {peek()}
            </div> 
        </div>
    )
}