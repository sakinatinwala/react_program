import { Linkedlist } from "../components/linkedlist/linkedlist";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";

export const LinkList = () => {
    const [stackValue,setStackValues] = useState([9,7,3,45,5,34]);
    const stackPop =() =>{
        if (stackValue.length > 0) {
            //stackValues.pop();
            setStackValues(stackValue.slice(0, -1));
        }else{
            alert("Cant remove from empty list ")
        }
    }

    const callValue =() =>{
       
        let val=document.querySelector("#text2").value;
        let indx=document.querySelector("#index").value;

        if(stackValue.length>0){
       let temp=stackValue.slice(0,indx)
        temp.push(val)
        let temp1=stackValue.slice(indx,stackValue.length)
        setStackValues([...temp,...temp1])

        }else{
           
            setStackValues([...stackValue,val])

        }
       indx=0;
       val=0;
    }

return (
    <React.Fragment>
    <div className='grid-row-2 justify-center items-center'>
    <span><h1><i> Linkedlist : </i></h1></span>
        <div className='grid-cols-2'>
            <div className='grid-cols-2 m-5'>
                <input type='text' id="index" placeholder="Index of Node"></input>
            </div>
            <div>
            <input type="text" id="text2" placeholder='Enter Node Value'></input>
            </div>
            <div className='grid-cols-2 m-5'>
                <Button variant="secondary" onClick={()=> callValue()}>
                    Add to linkedlist
                </Button>
            </div>
            <div className='grid-col-2 m-5'>
                <Button variant="secondary" onClick={()=>stackPop()}>
                    Remove from linkedlist
                </Button>
            </div>
           <br/>
            <div className='grid-cols-2 justify-center m-5'>
                <Linkedlist values={stackValue}/>
            </div>
        </div>
    </div>
    </React.Fragment>
)
}