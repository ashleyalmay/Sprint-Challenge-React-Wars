import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App";
import  styled from 'styled-components';
import Moves from './Moves';

const WrapperDiv = styled.div`
color: 
#f4534e;
background-color #696969;
width:100%;
display: flex;
opacity: 0.9;
`;
const NewH1 = styled.h1`
text-decoration: underline;
`;

const NewH2 = styled.h2`
text-decoration: underline;
`;

const NewH2type = styled.h2`
color: #ed7930;
text-decoration: underline;
`;


function Character4() {
    const [pokemon, setPokemon] = useState ([]);
    const [type, setType] = useState ([]);
    const [sprite, setSprite] = useState([]);
    const [moves, setMoves] = useState([]);
    useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/654')
    .then(response => {
        setPokemon(response.data);
        setType(response.data.types[0].type.name);
        setSprite(response.data.sprites.front_default);
        setMoves(response.data.moves)
    })
    .catch(error => {
        console.log("the data was not returned",error);
    });
    }, []);
    console.log(moves)
        return(
            <WrapperDiv>
                <img src ={sprite} alt="green and yellow dog"></img>
                <NewH1>Pokemon Name: {pokemon.name}</NewH1>
                <NewH2>Pokemon Height: 1.0 meters</NewH2> 
                {/* had to hard code the height because I couldn't get the . in the right spot // */}
                <NewH2type>Pokemon Type: {type}</NewH2type>
                <h2>Pokemon's Move Set</h2>
        <ul>{moves.slice(3,7).map(m =>(<Moves move = {m}/>))}</ul>
                
            </WrapperDiv>  
            );    
    }
export default Character4;