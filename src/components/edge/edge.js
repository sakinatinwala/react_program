import './edge.css';
export const Edge = (props) => {
    return (
        props.edgetype === 'up' ?  <UpEdge /> : 
        props.edgetype === 'down' ?  <DownEdge /> : <LeftEdge /> 
    )
}

const DownEdge =() => {
    return (
        <div className="down-edge">
            <span> &#8595; </span>
        </div>
    )
}

const UpEdge = () => {
    return (
        <div className="up-edge">
            <span> &#8593; </span>
        </div>
    )
}
/*
const RightEdge = () => {
    return (
        <div className="right-edge">
            <span> &#8594; </span>
        </div>
    )
}
*/
const LeftEdge = () => {
    return (
        <div className="left-edge">
            <span> &#8592; </span>
        </div>
    )
}
