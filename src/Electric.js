import React from "react";
import "./Electric.css"
import "./link.css"
function Electric(){
    return(
        <div id = "body">
            <br />
            <h1 class = "inset">TOP 10 ELECTRIC TYPE POKEMONS</h1>
            <br />
            <img id = "red" src = "https://pm1.narvii.com/5743/381118cc76a8603627bc9fa6780181ea8a020ad8_hq.jpg" alt = "Electric pokemons"></img>
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
                <td>644</td>
              <td>Zekrom</td>
              <td><img class = "abc" src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/04/Pokemon-Zekrom.jpg?q=50&fit=crop&w=740&dpr=1.5" alt ="Zekrom"></img></td>
              <td>Does not evolve</td>
              <td> <span class = "links electric">Electric</span>
              <br/>
              <span class = "links dragon">Dragon</span>
               </td>
              <td>5</td>
            </tr>
            <tr>
                <td>894</td>
              <td>Regieleki</td>
              <td><img class = "abc" src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/01/Regieleki-Attack.jpg?q=50&fit=crop&w=740&dpr=1.5" alt ="Regieleki"></img></td>
              <td>Does not evolve</td>
              <td> <span class = "links electric">Electric</span>
              </td>
              <td>8</td>
            </tr>
            <tr>
                <td>243</td>
              <td>Raikou</td>
              <td><img class = "abc" src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/05/Raikou-Ready-For-Battle.png?q=50&fit=crop&w=740&dpr=1.5" alt ="Raikou"></img></td>
              <td>Does not evolve</td>
              <td> <span class = "links electric">Electric</span>
               </td>
              <td>2</td>
            </tr>
            <tr>
                <td>145</td>
              <td>Zapdos</td>
              <td><img class = "abc" src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/04/Zapdos.jpg?q=50&fit=crop&w=740&dpr=1.5" alt ="Zapdos"></img></td>
              <td>Does not evolve</td>
              <td> <span class = "links electric">electric</span>
              <br/>
              <span class = "links flying">Flying</span>
               </td>
              <td>1</td>
            </tr>
            <tr>
                <td>645</td>
              <td>Thundurus</td>
              <td><img class = "abc" src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/04/Thundurus-Therian-The-Best-Gen-5-Pokemon-in-Pokemon-GO.jpg?q=50&fit=crop&w=740&dpr=1.5" alt ="Thundurus"></img></td>
              <td>Does not evolve</td>
              <td> <span class = "links electric">Electric</span>
              <br />
               <span class = "links flying">Flying</span>
               </td>
              <td>5</td>
            </tr>
            <tr>
                <td>785</td>
              <td>Tapu Koko</td>
              <td><img class = "abc" src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/06/Pokemon-Tapu-Koko-Cropped.jpg?q=50&fit=crop&w=740&dpr=1.5" alt ="Tapu Koko"></img></td>
              <td>Does not evolve </td>
              <td> <span class = "links electric">Electric</span>
              <br />
               <span class = "links fairy">Fairy</span>
               </td>
              <td>7</td>
            </tr>
            
            <tr>
                <td>604</td>
              <td>Eelektross</td>
              <td><img class = "abc" src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/01/Pokemon-Electivire.jpg?q=50&fit=crop&w=740&dpr=1.5" alt ="Eelektross"></img></td>
              <td>Tynamo -{'>'} Eelektrik -{'>'} Eelektross </td>
              <td> <span class = "links electric">Electric</span>
               </td>
              <td>5</td>
            </tr>
            <tr>
                <td>466</td>
              <td>Electivire</td>
              <td><img class = "abc" src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/01/Pokemon-Electivire.jpg?q=50&fit=crop&w=740&dpr=1.5" alt ="Electivire"></img></td>
              <td>Elekid -{'>'} Electabuzz -{'>'} Electivire </td>
              <td> <span class = "links electric">Electric</span>
               </td>
              <td>4</td>
            </tr>
            <tr>
                <td>181</td>
              <td>Ampharos</td>
              <td><img class = "abc" src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/12/ampharos.jpg?q=50&fit=crop&w=740&dpr=1.5" alt ="Ampharos"></img></td>
              <td>Mareep -{'>'} Flaffy -{'>'} Ampharos</td>
              <td> <span class = "links electric">Electric</span>
               </td>
              <td>2</td>
            </tr>
            <tr>
                <td>462</td>
              <td>Magnezone</td>
              <td><img class = "abc" src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/04/Pokemon-Magnezone-Magneton-Magnemite.jpg?q=50&fit=crop&w=740&dpr=1.5" alt ="Magnezone"></img></td>
              <td>Magnemite -{'>'} Magneton -{'>'} Magnezone </td>
              <td> <span class = "links electric">Electric</span>
              <br />
               <span class = "links steel">Steel</span>
               </td>
              <td>4</td>
            </tr>

          </tbody>
          </table>
        </div>
    )
}

export default Electric;