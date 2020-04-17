//moves
// Write your Character component here
import React, { useState, useEffect } from "react";

import "../App";
import  styled from 'styled-components';

const Moves = props => {

    console.log(props.move.name)
return(
    <li>
        {props.move.name}
    </li>
)

}
export default Moves;