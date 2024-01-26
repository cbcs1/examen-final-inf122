"use client"
import Image from "next/image"
import { useState, useEffect } from "react";
import style from "./Poliwag.module.css";

function Poliwag(){
    const [pokeimagen, setPokeimagen]=useState("/next.svg");
    const url="https://pokeapi.co/api/v2/pokemon/60";
    const [pokeName, setPokeName]=useState(" ");
    
  

    const [pokeID, setPokeID]=useState(0);
    const [pokeType, setPokeType]=useState([]);
    const [pokeHeight, setPokeHeight]=useState(" ");
    const [pokeWeight, setPokeWeight]=useState(" ");
    const [pokeAbilities, setPokeAbilities]=useState([]);
    const [pokeHP, setPokeHP]=useState(0);
    const [pokeAttack, setPokeAttack]=useState(0);
    const [pokeDefense, setPokeDefense]=useState(0);
    const [pokeSpeed, setPokeSpeed]=useState(0);


 
    useEffect(() => {   
        fetch(url).then(res=>res.json()).then(data => { 
            let poke=[];let pokety=[];
              
            for(let i=0; i<data.types.length; i++ ) {
               
                pokety.push(data.types[i].type.name+',   ')
               
              }  setPokeType(pokety);
            for(let i=0; i<data.abilities.length; i++ ) {
               
                poke.push(data.abilities[i].ability.name+",    ")
               
              }  setPokeAbilities(poke),
            setPokeimagen(data.sprites.front_default),
        setPokeName(data.species.name),setPokeID(data.id),setPokeWeight(data.weight),
            setPokeHeight(data.height),
            setPokeHP(data.stats[0].base_stat),setPokeAttack(data.stats[1].base_stat),setPokeDefense(data.stats[2].base_stat),setPokeSpeed(data.stats[5].base_stat)
       
        });
         }, [])
return(
    <div className={style.container}>
      
        <h2 className={style.titulo}>My Pokemon</h2>
        <h1 className={style.pokenombre}>{pokeName}</h1>
        <h3 className={style.pokemonid}>#0{pokeID}</h3>
        <Image src={pokeimagen}
             alt="pokeimagen"
             width={300}
             height={300}
             
            />
        <div className={style.pokemonData}>
        <h3>About</h3>
            <div className={style.pokeAbout}> 
                
                        <div >
                              <p className={style.titleabout}>Type</p>     
                              <p className={style.titleabout}>Height</p>  
                              <p className={style.titleabout}>Weight</p>  
                              <p className={style.titleabout}>Abilities</p>             
                       </div>
                        <div className={style.pokemonaboutt}>
                                  <p className={style.pokemonabout}>  {pokeType}</p>  
                                   <p className={style.pokemonabout}>  {pokeHeight} m</p>  
                                <p className={style.pokemonabout}>  {pokeWeight}  kg</p>  
                                <p className={style.pokemonabout}>  {pokeAbilities} </p>  
                        </div>
              </div>
              <h3>Stats</h3>
            <div className={style.pokeStats}>
            
                          <div >
                             <p className={style.titlestats}>HP</p>  
                              <p className={style.titlestats}>Attack</p>  
                               <p className={style.titlestats}>Defense</p>  
                               <p className={style.titlestats}>Speed</p>  

                             </div>
                          <div className={style.pokemonstatss}>
                                <p className={style.pokemostats}> {pokeHP}  </p>  
                                 <p className={style.pokemonstats}>   {pokeAttack}</p>  
                                 <p className={style.pokemonstats}> {pokeDefense}  </p>  
                                 <p className={style.pokemonstats}> {pokeSpeed}  </p>  
                             </div>


            </div>
           
        </div>

    </div>
)

}
export default Poliwag;