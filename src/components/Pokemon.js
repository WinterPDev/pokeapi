import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Pokemon = (props) => {

    const [resData, setResData] = useState([]);

    const fetchHandler = () => {
            axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
                .then(response=>{
                    setResData(response.data.results);
                })
                .catch(err=>console.log(err));
        }

    return (
        <div>
            <button onClick={fetchHandler}>Fetch Pokemon</button>
            <div>
                {
                resData.map((resData, i) => {
                    return (
                        <li key={i}> 
                            {resData.name}
                        </li>
                    )
                })
                }
            </div>
        </div>
    )





}

export default Pokemon;