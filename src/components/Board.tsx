import { useWindowSize } from "react-use"
import { Layer, Stage } from "react-konva"
import { CONFIG } from "../constants"
import { useAppContext } from "../hooks"
import { Cell } from "./Cell"

export const Board = () => {
  const { board } = useAppContext();
  const { width: ww, height: wh } = useWindowSize();
  const dimension = Math.min(ww, wh);
  const width = dimension * 0.8;
  const cellSize = width / CONFIG.dimension;
  const height = cellSize * CONFIG.dimension

  return (
    <Stage width={width} height={height}>
      <Layer>
        {board.map((row, i) => {
          return row.map((dude, j) => {
            return <Cell
              key={[i, j].toString()}
              x={j * cellSize}
              y={i * cellSize}
              size={cellSize}
              {...dude}
            />
          })
        })}
      </Layer>
    </Stage>
  )
}
