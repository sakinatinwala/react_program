import './edge.css';

export const Edge = (props)=>{
    return(
    props.edgeType=== 'up' ? <Upedge/> : 
    props.edgeType === 'down' ? <Downedge/> :
    props.edgeType === 'double' ? <DoubleEdge/>:
    props.edgeType === 'side-right' ? <SideRight/>:
    props.edgeType === 'side-left' ? <SideLeft/>:<Leftedge/>
    );
}

const Upedge = () => {
    return (
        <div className='up-edge'>
            <span>&#8593;</span>
        </div>
    );
}

const Downedge =() => {
    return (
        <div className='down-edge'>
            <span>&#8595;</span>
        </div>
    )
}

const Leftedge = () => {
    return (
        <div className='left-edge'>
            <span>&#8594;</span>
        </div>
    )
}

const DoubleEdge = () => {
    return (
        <div className='leftright-edge'>
        <span>&#8596;</span>
        </div>
    )
}

const SideRight = () => {
    return (
        <div className='side-right'>
            <span>&#10136;</span>
        </div>
    )
}

const SideLeft = () => {
    return(
        <div className='side-left'>
            <span>&#8601;</span>
        </div>
    )
}