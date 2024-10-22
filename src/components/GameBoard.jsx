import React, { useState } from 'react'

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

function GameBoard({ onSelectSquare, activePlayerSymbol }) {

    const [gameBoard, setGameBoard] = useState(initialGameBoard)

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArry => [...innerArry])]
            prevGameBoard[rowIndex][colIndex] = activePlayerSymbol;
            return prevGameBoard;
        })
        onSelectSquare()
    }

    return (
        <>
            <ul id="game-board" className='d-flex list-group-item justify-content-center gap-2 mt-5' >
                {initialGameBoard.map((row, rowIndex) => <li key={rowIndex} style={{ listStyle: 'none' }}>
                    <ul style={{ listStyle: 'none', display: 'flex', gap: '10px', flexDirection: 'column' }}>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => handleSelectSquare(rowIndex, colIndex)} style={{ padding: '60px', fontSize: '80px', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className='btn btn-warning text-black'>{playerSymbol}</button>
                            </li>))}
                    </ul>
                </li>)}
            </ul>
        </>
    )
}

export default GameBoard
