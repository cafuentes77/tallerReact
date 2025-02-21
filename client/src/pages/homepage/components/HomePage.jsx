import { useState, useEffect } from "react"

export const HomePage = () => {

  const [pokemones, sePokemones] = useState([]);
  
    const getData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/');
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
      };

      useEffect(() => {
        getData();
      }, []);

    return (
      <div>HomePage</div>
    )
  }