import {Node} from '../node/node';
import {Edge} from '../edge/edge'

export const Queue = (props) => {
    
 const values=props.values;
 const length=values.length || 0;
 
 return(
    <div className='queue'>
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
