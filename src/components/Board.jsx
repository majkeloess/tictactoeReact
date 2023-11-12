import { useState } from "react";
import Node from "./Node";
import winningPlayer from "../winningPlayer";
import Status from "./Status";

function Board () {
      const[whosNext, setWhosNext] = useState(true);
      const [node, setNode] = useState(Array(9).fill(null))
      
      function clickHandler (numberOfNode) {

            if(winningPlayer(node) || node[numberOfNode]){      //by default node is set to 'null', when value changes to other it' skipped
                  return;
            }
            
            const nextNode = node.slice(); // <-- copy of node
            
            if(whosNext){
                  nextNode[numberOfNode] = "O";
            }
            else {
                  nextNode[numberOfNode] = "X";
            }
            setNode(nextNode);      // update of 'node' here
            setWhosNext(!whosNext);
      }

      const winner = winningPlayer(node);
      let statusOfTheGame;
            
            if(winner) {
                  statusOfTheGame = "Winner: " + winner; 
            }
            else {
                  statusOfTheGame = "Next move: " + (whosNext ? 'O' : 'X');
            }
      
      return (
            <>    
                  <Status status={statusOfTheGame} />
                  <div className="board-row">
                        <Node value={node[0]} onSquareClick={() => clickHandler(0)} />
                        <Node value={node[1]} onSquareClick={() => clickHandler(1)} />
                        <Node value={node[2]} onSquareClick={() => clickHandler(2)} />
                  </div>
                  <div className="board-row">
                        <Node value={node[3]} onSquareClick={() => clickHandler(3)} />
                        <Node value={node[4]} onSquareClick={() => clickHandler(4)} />
                        <Node value={node[5]} onSquareClick={() => clickHandler(5)} />
                  </div>
                  <div className="board-row">
                        <Node value={node[6]} onSquareClick={() => clickHandler(6)} />
                        <Node value={node[7]} onSquareClick={() => clickHandler(7)} />
                        <Node value={node[8]} onSquareClick={() => clickHandler(8)} />           
                  </div>

            </>
      )
}

export default Board;