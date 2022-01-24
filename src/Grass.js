import React from "react";
import "./Grass.css"
import "./link.css"
function Grass(){
    return(
        <div id = "body">
            <br />
            <h1 class = "inset">TOP 10 GRASS TYPE POKEMONS</h1>
            <br />
            <img id = "red" src = "https://progameguides.com/wp-content/uploads/2021/03/pokemonGoGrass-1.png" alt = "Grass pokemons"></img>
            <br/><br/>
            <table id = "table" >
          
            <thead>
              <tr>
                <td>Pokedex number</td>
                <td>Name</td>
                <td>Image</td>
                <td>Evolution</td>
                <td>Type</td>
                <td>Generation</td>                
                </tr>
            </thead>
          <tbody>
            <tr>
                <td>893</td>
              <td>Zarude</td>
              <td><img class = "abc" src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/07/Pokemon-Sword-Shield-Zarude.jpg?q=50&fit=crop&w=740&dpr=1.5" alt ="Zarude"></img></td>
              <td>Does not evolve</td>
              <td> <span class = "links grass">Grass</span>
              <br />
               <span class = "links dark">Dark</span>
               </td>
              <td>8</td>
            </tr>

            <tr>
                <td>003</td>
              <td>Venusaur</td>
              <td><img class = "abc" src="https://www.thefactsite.com/wp-content/uploads/2019/12/Venusaur-mascot.webp" alt ="Venusaur"></img></td>
              <td>Bulbasaur -{'>'} Ivysaur -{'>'} Venusaur</td>
              <td> <span class = "links grass">Grass</span>
              <br />
               <span class = "links poison">Poison</span>
               </td>
              <td>1</td>
            </tr>
            <tr>
                <td>492</td>
              <td>Shaymin</td>
              <td><img class = "abc" src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2019/11/Shaymin-from-Pokemon-anime-Cropped.jpg?q=50&fit=crop&w=740&dpr=1.5" alt ="Shaymin"></img></td>
              <td>Does not evolve</td>
              <td> <span class = "links grass">Grass</span>
               </td>
              <td>4</td>
            </tr>
            <tr>
                <td>273</td>
              <td>Seedot</td>
              <td><img class = "abc" src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2019/11/Seedot.jpg?q=50&fit=crop&w=740&dpr=1.5" alt ="Seedot"></img></td>
              <td>Seedot -{'>'} Nuzleaf -{'>'} Shiftry</td>
              <td> <span class = "links grass">Grass</span>
               </td>
              <td>3</td>
            </tr>
            <tr>
                <td>640</td>
              <td>Virizion</td>
              <td><img class = "abc" src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2019/11/Virizion-from-Pokemon-anime-Cropped.jpg?q=50&fit=crop&w=740&dpr=1.5" alt ="Virizion"></img></td>
              <td>Does not evolve</td>
              <td> <span class = "links grass">Grass</span>
              <br />
               <span class = "links fighting">Fighting</span>
               </td>
              <td>5</td>
            </tr>
            <tr>
                <td>898</td>
              <td>Calyrex</td>
              <td><img class = "abc" src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2019/11/Calyrex.jpg?q=50&fit=crop&w=740&dpr=1.5" alt ="Calyrex"></img></td>
              <td>Does not evolve </td>
              <td> <span class = "links grass">Grass</span>
              <br />
               <span class = "links psychic">Psychic</span>
               </td>
              <td>8</td>
            </tr>
            
            <tr>
                <td>710</td>
              <td>Pumpkaboo</td>
              <td><img class = "abc" src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2019/11/Pumpkaboo-from-Pokemon-anime-Cropped.jpg?q=50&fit=crop&w=740&dpr=1.5" alt ="Pumpkaboo"></img></td>
              <td>Pumpkaboo -{'>'} Gourgeist </td>
              <td> <span class = "links grass">Grass</span>
              <br />
               <span class = "links ghost">Ghost</span>
               </td>
              <td>6</td>
            </tr>
            <tr>
                <td>251</td>
              <td>Celebi</td>
              <td><img class = "abc" src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2019/11/Celebi-from-Pokemon-Anime-Cropped.jpg?q=50&fit=crop&w=740&dpr=1.5" alt ="Celebi"></img></td>
              <td>Does not evolve</td>
              <td> <span class = "links grass">Grass</span>
              <br />
               <span class = "links psychic">Psychic</span>
               </td>
              <td>2</td>
            </tr>
            <tr>
                <td>812</td>
              <td>Rillaboom</td>
              <td><img class = "abc" src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2019/11/Rillaboom-Gigantamax.jpg?q=50&fit=crop&w=740&dpr=1.5" alt ="Rillaboom"></img></td>
              <td>Grookey -{'>'} Thwackey -{'>'} Rillaboom </td>
              <td> <span class = "links grass">Grass</span>
               </td>
              <td>8</td>
            </tr>
            <tr>
                <td>470</td>
              <td>Leafeon</td>
              <td><img class = "abc" src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2019/11/Leafeon-from-Pokemon-Anime-Cropped.jpg?q=50&fit=crop&w=740&dpr=1.5" alt ="Leafeon"></img></td>
              <td>Eevee -{'>'} Leafeon </td>
              <td> <span class = "links grass">Grass</span>
               </td>
              <td>4</td>
            </tr>

          </tbody>
          </table>
        </div>
    )
}

export default Grass;