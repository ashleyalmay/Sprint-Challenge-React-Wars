//moves
// Write your Character component here
import React from "react";

import "../App";


const Moves = props => {

return(
    <li>
        {props.move.move.name}
    </li>
)

}
export default Moves;