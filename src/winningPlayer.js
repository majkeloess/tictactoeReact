function winningPlayer(squares) {
      const lines = [   //array of all winning possibilities (8)
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
      ];

      for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i]; //unpacking array

            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a]) {
                  //checking if positions (a,b,c) are right and also if this is same symbol
                  return squares[a];

            }

      }
      return null;
}

export default winningPlayer;