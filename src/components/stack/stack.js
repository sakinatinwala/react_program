import { Node } from "../node/node";
import { Edge } from "../edge/edge";

export const Stack = (props) => {
    const values = props.values;
    const length = values.length;

    return (
        <div className="stack">
            {values.map((value, index) => {
                return (
                    <div style = {{display:'grid'}} key={index}>
                        <Node content={value} />
                        {index < length - 1 && <Edge edgetype="down"/>}
                    </div>
                )
            }
            )}
        </div>
    )
}
