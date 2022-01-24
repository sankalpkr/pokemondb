import React from "react";
import "./Home.css";
function Home(){
    return( <div id = "body">
            <br />
            <h1 class = "inset">SOME POPULAR POKEMONS</h1>
            <br />
            <img id = "red" src = "https://s3.us-east-1.amazonaws.com/dexerto-assets-production-cbbdf288/uploads/articles/Group-of-Pokemon.JPG" alt = "Pokemons"></img>
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
                <td>150</td>
              <td>Mewtwo</td>
              <td><img class = "abc" src="https://cdn.vox-cdn.com/thumbor/sZPPvUyKyF97UEU-nNtVnC3LpF8=/0x0:1750x941/1200x800/filters:focal(878x316:1158x596)/cdn.vox-cdn.com/uploads/chorus_image/image/63823444/original.0.jpg" alt ="Mewtwo"></img></td>
              <td>Does not evolve</td>
              <td> <span class = "links psychic">Psychic</span>
               </td>
              <td>1</td>
            </tr>

            <tr>
                <td>658</td>
              <td>Greninja</td>
              <td><img class = "abc" src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/05/pokemon_greninja.jpg?q=50&fit=crop&w=740&dpr=1.5" alt ="Greninja"></img></td>
              <td>Froakie -{'>'} Frogadier -{'>'} Greninja</td>
              <td> <span class = "links water">Water</span>
              <br/>
              <span class = "links dark">Dark</span>
               </td>
              <td>6</td>
            </tr>
            <tr>
                <td>448</td>
              <td>Lucario</td>
              <td><img class = "abc" src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/06/Pokemon-Lucario-1.jpg?q=50&fit=crop&w=740&dpr=1.5" alt ="Lucario"></img></td>
              <td>Riolu -{'>'} Lucario</td>
              <td> <span class = "links steel">Steel</span>
              <br/>
              <span class = "links fighting">Fighting</span>
              </td>
              <td>4</td>
            </tr>
            
            <tr>
                <td>249</td>
              <td>Lugia</td>
              <td><img class = "abc" src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/04/Pokemon-Anime-Lugia-Flying-Over-Rapidash.jpeg?q=50&fit=crop&w=740&dpr=1.5" alt ="Lugia"></img></td>
              <td>Does not evolve </td>
              <td> <span class = "links flying">Flying</span>
              <br />
               <span class = "links psychic">Psychic</span>

               </td>
              <td>2</td>
            </tr>
            <tr>
                <td>197</td>
              <td>Umbreon</td>
              <td><img class = "abc" src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/04/Umbreon.jpg?q=50&fit=crop&w=740&dpr=1.5" alt ="Umbreon"></img></td>
              <td>Eevee -{'>'} Umbreon</td>
              <td> 
              <span class = "links dark">Dark</span>
               </td>
              <td>2</td>
            </tr>
            <tr>
                <td>700</td>
              <td>Sylveon</td>
              <td><img class = "abc" src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/07/Sylveon.jpg?q=50&fit=crop&w=740&dpr=1.5" alt ="Sylveon"></img></td>
              <td>Eevee -{'>'} Sylveon</td>
              <td> <span class = "links fairy">Fairy</span>
               </td>
              <td>6</td>
            </tr>
            <tr>
                <td>445</td>
              <td>Garchomp</td>
              <td><img class = "abc" src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/09/Pokemon-Garchomp-Tournament.jpg?q=50&fit=crop&w=740&dpr=1.5" alt ="Garchomp"></img></td>
              <td>Gible -{'>'} Gabite -{'>'} Garchomp</td>
              <td> <span class = "links dragon">Dragon</span>
              <br />
               <span class = "links ground">Ground</span>
               </td>
              <td>4</td>
            </tr>
            
            <tr>
                <td>384</td>
              <td>Rayquaza</td>
              <td><img class = "abc" src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/07/Rayquaza-1.jpg?q=50&fit=crop&w=740&dpr=1.5" alt ="Rayquaza"></img></td>
              <td>Does not evolve </td>
              <td> <span class = "links dragon">Dragon</span>
               <br/>
               <span class = "links flying">Flying</span>
               </td>
              <td>3</td>
            </tr>
            <tr>
                <td>094</td>
              <td>Gengar</td>
              <td><img class = "abc" src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/08/Pok%C3%A9mon-Anime-Gengar-Jumping-Cave-Smiling-Malicious-Evil.jpg?q=50&fit=crop&w=740&dpr=1.5" alt ="Gengar"></img></td>
              <td>Gasly -{'>'} Haunter -{'>'} Gengar </td>
              <td> <span class = "links ghost">Ghost</span>
              <br/>
              <span class = "links poison">Poison</span>
               </td>
              <td>1</td>
            </tr>
            <tr>
                <td>248</td>
              <td>Tyranitar</td>
              <td><img class = "abc" src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2020/10/Pokemon-Anime-Tyranitar-Standing-T-Posing.jpeg?q=50&fit=crop&w=740&dpr=1.5" alt ="Tyranitar"></img></td>
              <td>Larvitar -{'>'} Pupitar -{'>'} Tyranitar</td>
              <td> <span class = "links rock">Rock</span>
              <br/>
              <span class = "links dark">Dark</span>
               </td>
              <td>2</td>
            </tr>

          </tbody>
          </table>
        
        </div>
    )
}

export default Home;