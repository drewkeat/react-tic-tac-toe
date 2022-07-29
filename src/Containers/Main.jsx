import React, { Component } from "react";

import {Board} from "../Components"

class Main extends Component {
  state={
    turn: "",
    board: {
      1: null,
      2: "passed",
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
      <>
        <Board status={this.state.board[2]}/>
      </>
    )
  }
}

export default Main;