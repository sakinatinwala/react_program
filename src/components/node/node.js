import './node.css';

export const Node = (props) => {
    return(
        <div className='node'>
            <span className='content'>{props.content}</span>
        </div>
    )
}
 export const Nodes = (props) => {
    return(
        <div className='nodes'>
            <span className='content'>{props.content}</span>
        </div>
    )
 }
