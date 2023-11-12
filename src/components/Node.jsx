
function Node (prop) {

      return (
            <button className="square" onClick={prop.onSquareClick}>{prop.value}</button>
      );
}

export default Node;