import React from "react";
import "./Home.css";
function Home(){
    return( <div>
            <div id = "body1">
            <div id = "content">
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
          <br/>
        </div>
        <aside>
          <h1 class = "inset" id = "a">FEATURED</h1>
          <br/>
          <h1 class = "inset" id = "b">
          Detective
          <br/>
          Pikachu
          </h1>
          <br/>
        <img class = "abc" id = "simg" src="https://i.guim.co.uk/img/media/dd703cd39013271a45bc199fae6aa1ddad72faaf/0_0_2000_1200/master/2000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=178a9434c272d5a067353f57a30f58ed" alt ="Pikachu"></img>
        <br/>
          <p>
          Pokémon Detective Pikachu[c] is a 2019 3D live-action/computer-animated mystery film directed by Rob Letterman. Based on the Pokémon franchise, the film is a loose adaptation of the 2016 video game Detective Pikachu.[6] It was written by Letterman, Dan Hernandez, Benji Samit and Derek Connolly, from a story by Hernandez, Samit and Nicole Perlman, and produced by Legendary Pictures and Toho. It was the first live-action Pokémon film[7] and the first live-action film based on a Nintendo game property since Super Mario Bros. (1993).

Ryan Reynolds stars as the voice and facial motion capture of Pikachu, with Justice Smith, Kathryn Newton, Suki Waterhouse, Omar Chaparro, Chris Geere, Ken Watanabe and Bill Nighy in live-action roles. The plot follows a former Pokémon trainer Tim Goodman and the Pokémon creatures as they attempt to solve the mysterious disappearance of Tim's father, Harry.

Filming took place from January to May 2018 in Colorado, England and Scotland. Detective Pikachu was released in Japan on May 3, 2019[8][9] and in the United States on May 10, 2019, distributed by Warner Bros. Pictures in RealD 3D, Dolby Cinema, IMAX, 4DX, and ScreenX formats.[10] It is the first Pokémon film distributed theatrically in the United States since Pokémon Heroes (2003) and the first distributed by Warner Bros. since Pokémon 3 (2001). The film received mixed reviews, with praise as a video game adaptation that would appeal to fans. It made a worldwide gross of $433 million. It is the second highest-grossing video game film adaptation behind Warcraft, also produced by Legendary Pictures.
          </p>
        </aside>
        <br/>
        </div>
        <hr/>
        <footer>
        <br/>
        CREATED BY - SANKALP KUMAR
        <br/>
        CONTACT EMAIL - sankalp042@gmail.com
        <br/>
         &nbsp;
      </footer>
      
        </div>
    )
}

export default Home;