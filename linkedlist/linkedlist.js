import {Node} from '../node/node';
import {Edge} from '../edge/edge'

export const Linkedlist = (props) => {
 const value=props.value;
 const length=value.length;
 let nodeObj ={
    head:null,
    currPoint:null,
    point:null 
 }
 let val =[]
 let i=0;
 if(nodeObj.head=== null){
    for( i =0;i<length;i++){
   i===0 ?nodeObj={
        head:value[0],
        currPoint:value[i],
        point:value[i+1]
    }: nodeObj={
        currPoint :value[i],
        point:value[i+1]
    }
 val.push(nodeObj)
}
 }
 
 return(
    <div className='linklist'>
         {val.map((current,index) => {
                return(
                    <div style={{display:'inline-block'}} key={index}>
                            <Node content = {current.currPoint}/>
                            {index < length -1 && <Edge edgeType ={props.edgeType}/>}
                    </div>
                )
            }
        )}
        
    </div>
)
}