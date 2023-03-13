const board = document.getElementById("omok");

const map = document.createElement("div");

map.className = "map";


let win = 0;
let turn = 1;
const size = 10;


setMap();

function setMap(){
    for(let i = 0; i< size;i++){
        for(let j = 0; j < size; j++){
            const tile = document.createElement("div"); 
            const id = `y${i}x${j}`;
            tile.className = "tile";
            tile.setAttribute("id",id);

            tile.addEventListener ("click", e => {
                
                if(tile.innerText ===""){
                    tile.innerText = turn == 1 ? "⚫️" : "⚪️";    
                    turn = turn === 1 ? 2 : 1;
                }
            })
            map.append(tile);
        }
    }
    board.append(map);
}