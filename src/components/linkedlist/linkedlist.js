import {Node} from '../node/node';
import {Edge} from '../edge/edge'

export const Linkedlist = (props) => {
    
 const values=props.values;
 const length=values.length || 0;
 
 return(
    <div className='linklist'>
         {values.map((values,index) => {
                return(
                    <div style={{display:'inline-block'}} key={index}>
                            <Node content = {values}/>
                            {index < length -1 && <Edge edgeType ={props.edgeType}/>}
                    </div>
                )
            }
        )}
        
    </div>
)
}
