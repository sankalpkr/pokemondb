import React from "react";
import "./Fire.css"
import "./link.css"
function Fire(){
    return(
        <div id = "body">
            <br />
            <h1 class = "inset">TOP 10 FIRE TYPE POKEMONS</h1>
            <br />
            <img id = "red" src = "https://ham-it.com/wp-content/uploads/2019/11/Fire-type-Pokemon.png" alt = "Fire pokemons"></img>
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
                <td>643</td>
              <td>Reshiram</td>
              <td><img class = "abc" src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/04/Pokemon-Reshiram.jpg?q=50&fit=crop&w=740&dpr=1.5" alt ="Reshiram"></img></td>
              <td>Does not evolve</td>
              <td> <span class = "links fire">Fire</span>
              <br />
               <span class = "links dragon">Dragon</span>
               </td>
              <td>5</td>
            </tr>

            <tr>
                <td>250</td>
              <td>Ho-oh</td>
              <td><img class = "abc" src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2019/10/ho-oh.jpg?q=50&fit=crop&w=740&dpr=1.5" alt ="Ho-oh"></img></td>
              <td>Does not evolve</td>
              <td> <span class = "links fire">Fire</span>
              <br />
               <span class = "links flying">Flying</span>
               </td>
              <td>2</td>
            </tr>
            <tr>
                <td>721</td>
              <td>Volcanion</td>
              <td><img class = "abc" src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/01/Volcanion.jpg?q=50&fit=crop&w=740&dpr=1.5" alt ="Volcanion"></img></td>
              <td>Does not evolve</td>
              <td> <span class = "links fire">Fire</span>
              <br />
               <span class = "links water">Water</span>
               </td>
              <td>6</td>
            </tr>
            <tr>
                <td>244</td>
              <td>Entei</td>
              <td><img class = "abc" src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/09/pokemon-entei-trademark.jpg?q=50&fit=crop&w=740&dpr=1.5" alt ="Entei"></img></td>
              <td>Does not evolve</td>
              <td> <span class = "links fire">Fire</span>
               </td>
              <td>2</td>
            </tr>
            <tr>
                <td>006</td>
              <td>Charizard</td>
              <td><img class = "abc" src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/03/charizard-figure-first-four.jpg?q=50&fit=crop&w=740&dpr=1.5" alt ="Charizard"></img></td>
              <td>Charmander -{'>'} Charmeleon -{'>'} Charizard </td>
              <td> <span class = "links fire">Fire</span>
              <br />
               <span class = "links flying">Flying</span>
               </td>
              <td>1</td>
            </tr>
            <tr>
                <td>257</td>
              <td>Blaziken</td>
              <td><img class = "abc" src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/01/Blaziken-Pokemon-Anime.jpg?q=50&fit=crop&w=740&dpr=1.5" alt ="Blaziken"></img></td>
              <td>Torchic -{'>'} Combusken -{'>'} Blaziken </td>
              <td> <span class = "links fire">Fire</span>
              <br />
               <span class = "links fighting">Fighting</span>
               </td>
              <td>3</td>
            </tr>
            
            <tr>
                <td>146</td>
              <td>Moltres</td>
              <td><img class = "abc" src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/12/moltres.jpg?q=50&fit=crop&w=740&dpr=1.5" alt ="Moltres"></img></td>
              <td>Does not evolve </td>
              <td> <span class = "links fire">Fire</span>
              <br />
               <span class = "links flying">Flying</span>
               </td>
              <td>1</td>
            </tr>
            <tr>
                <td>637</td>
              <td>Volcarona</td>
              <td><img class = "abc" src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2019/08/pokemon-volcarona.jpg?q=50&fit=crop&w=740&dpr=1.5" alt ="Volcarona"></img></td>
              <td>Larvesta {'>'} Volcarona </td>
              <td> <span class = "links fire">Fire</span>
              <br />
               <span class = "links bug">Bug</span>
               </td>
              <td>5</td>
            </tr>
            <tr>
                <td>467</td>
              <td>Magmortar</td>
              <td><img class = "abc" src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/04/Magmortar-Cropped.png?q=50&fit=crop&w=740&dpr=1.5" alt ="Magmortar"></img></td>
              <td>Magby -{'>'} Magmar -{'>'} Magmortar </td>
              <td> <span class = "links fire">Fire</span>
               </td>
              <td>4</td>
            </tr>
            <tr>
                <td>655</td>
              <td>Delphox</td>
              <td><img class = "abc" src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/01/Delphox.jpg?q=50&fit=crop&w=740&dpr=1.5" alt ="Delphox"></img></td>
              <td>Fennekin -{'>'} Braixen -{'>'} Delphox </td>
              <td> <span class = "links fire">Fire</span>
              <br />
               <span class = "links psychic">Psychic</span>
               </td>
              <td>6</td>
            </tr>

          </tbody>
          </table>
        </div>
    )
}

export default Fire;