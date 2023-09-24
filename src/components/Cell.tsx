import { Rect } from "react-konva"
import { Dude } from "../types"
import { CONFIG } from "../constants"

type Props = Dude & {
  size: number
  x: number
  y: number
}

export const Cell = ({
  x,
  y,
  size,
  age
}: Props) => {

  return (
    <Rect
      x={x}
      y={y}
      width={size}
      height={size}
      fill={CONFIG.cellColours[age]}
      stroke="bg-background"
      strokeWidth={0.5}
    />
  )
}
