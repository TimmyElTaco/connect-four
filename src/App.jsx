import './App.css'
import Board from './components/Board'

function App() {

  return (
    <>
      <header className='w-2/3 flex flex-col gap-2 justify-center items-center'>
        <h3 className='text-white font-bold text-2xl'>Connect four</h3>
        <p className='text-slate-300 text-xl'>
          "Connect Four" is a classic strategy game enjoyed by people of all ages around the world. The objective is simple: be the first player to line up four of your colored discs horizontally, vertically, or diagonally on the game board.
        </p>
      </header>
      <Board />
    </>
  )
}

export default App
