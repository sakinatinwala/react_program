import { Stack } from "../components/stack/stack";
import { useState } from "react";

export const Stacks = () => {
    const [stackvalues, setStackValues] = useState ([1,2,3]);

    return (
        <div className="grid-rows-2 justify-center items-center">
            <div className="grid-cols-2 m-5">
                <button onClick={() => setStackValues([...stackvalues, 4])}>
                    Add to Stack..
                </button>
            </div>
            <div className="grid-cols-2 m-5">
                <button onClick={() => setStackValues(stackvalues.slice(0, -1))}>
                    Remove from Stack..
                </button>
            </div>
            <div className="grid-cols-2 justify-center m-5">
                <Stack values={stackvalues} />
            </div> 
        </div>
    )
}


/*
const size = 3;

const push = (value) => {
    if (Stacks.length < size) {
        Stacks.push(value);
        return Stacks;
    }
    return 'Stacks is full ==> stackoverflow';
}

const pop = () => {
    if (Stacks.length > 0) {
        return Stacks.pop();
    }
    return 'Stacks is empty ==> underflow';
}

const peek = () => {
    if (Stacks.length > 0) {
        return Stacks[Stacks.length - 1];
    }
    return 'Stacks is empty ==> underflow';
}

push(1);
console.log(Stacks);
push(2);
console.log(Stacks);
push(3);
console.log(Stacks);
console.log(peek());
push(4);
console.log(Stacks);
pop();
console.log(Stacks);
pop();
console.log(Stacks);
pop();
console.log(Stacks);
pop();
console.log(Stacks);
*/