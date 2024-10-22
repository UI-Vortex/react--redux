import React, { useState } from 'react'

function Player({ initialName, symbol, isActive }) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)

    function handleEditClick() {
        setIsEditing((editing) => !editing)
    }

    function handleChange(event) {
        setPlayerName(event.target.value)
    }

    let editablePlayerName = <span className='player-name text-white'>{playerName}</span>
    // let btnCaption = 'Edit';


    if (isEditing) {
        editablePlayerName = (
            <input onChange={handleChange} style={{width: '65px'}} type='text' required value={playerName} />
        )
        // btnCaption='Save'

    }

    return (
        <>
            <li className={isActive ? 'active' : undefined} style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                <span className="player d-flex gap-4">
                    {editablePlayerName}
                    <span className="player-symbol text-black">{symbol}</span>
                </span>
                <button className='btn btn-danger' onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
            </li>
        </>
    )
}

export default Player
