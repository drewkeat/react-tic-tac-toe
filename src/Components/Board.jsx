import React from "react"

import Cell from "./Cell"

const Board=({status, ...props})=>{
  return(
    <>
      <h1>Board</h1>
      {status}
      <Cell/>
    </>
  )
}

export default Board