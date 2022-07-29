import React from "react"

import {Cell} from "../Components"

const Board=({status, ...props})=>{
  return(
    <>
      <h1>Board</h1>
      <Cell/>
    </>
  )
}

export default Board