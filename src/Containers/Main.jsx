import React, { Component } from "react";

import Board from "../Components/Board"

class Main extends Component {
  state={
    turn: "",
    board: {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
    },
  }
  
  render() {
    return(
      <Board />
    )
  }
}

export default Main;