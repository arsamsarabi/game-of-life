import { useAppContext } from "../hooks"

export const Header = () => {
  const { generation, births, deaths, toggleStop, stop, alive } = useAppContext();

  return (
    <header className="flex w-full justify-between items-center">
      <p className="">Alive: {alive}</p>
      <p className="">Generation: {generation}</p>
      <p className="">Births: {births}</p>
      <p className="">Deaths: {deaths}</p>
      <button onClick={toggleStop}>{
        stop ? "Play" : "Pause"
      }</button>
    </header>
  )
}
