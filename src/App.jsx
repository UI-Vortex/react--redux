import React, { useState } from 'react'
import Player from './components/Player'
import GameBoard from './components/GameBoard'

function App() {

    const [activePlayer, setActivePlayer] = useState('X')

    function handleSelectSquare() {
        setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X')
    }

    return (
        <>
            <main className='d-flex justify-content-center flex-column align-items-center bg-primary rounded-5'>
                <div id="game-container" className='w-auto border border-black p-5 mt-3 rounded-3'>
                    <ol id='players' className='highlight-player d-flex gap-5 justify-content-between align-items-center' >
                        <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
                        <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
                    </ol>

                    <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
                </div>

                LOG
            </main>
        </>
    )
}

export default App
