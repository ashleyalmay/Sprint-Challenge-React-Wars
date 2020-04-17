// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App";
import  styled from 'styled-components';
import Moves from './Moves';




function Character() {
    const [pokemon, setPokemon] = useState ([]);
    const [type, setType] = useState ([]);
    const [sprite, setSprite] = useState([]);
    const [moves, setMoves] = useState([]);
    useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/300')
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
            <section className ="info">
                <img src ={sprite}/>
                <h1>{pokemon.name}</h1>
                <h2>hight:{pokemon.height} inches</h2>
                <h2>{type}</h2>
        <ul>{moves.map(m =>(<Moves move = {m}/>))}</ul>
                
            </section>  
            );    
    }
export default Character;