import React from 'react';

const Grid = ({ gridSpecs }) => {
    const {gridSize, selectedIndex} = gridSpecs
    
    const displayStyle = {
        gridTemplateRows: `repeat(${gridSize[0]}, 1fr)`,
        gridTemplateColumns: `repeat(${gridSize[1]}, 1fr)`,
    }

    const createGrid = () => {
        const totalItems = gridSize[0] * gridSize[1]
        let gridItems = []
        for(let i = 0; i < totalItems; i++){
            if(i + 1 === selectedIndex){
                gridItems.push(
                    <div key={i} className="grid-item selected-true"><p className="grid-item-index">{i + 1}</p></div>
                )
            } else {
                gridItems.push(
                    <div key={i} className="grid-item selected-false"><p className="grid-item-index">{i + 1}</p></div>
                )
            }
        }
        return gridItems
    }

    return(
        <div className="grid-display" style={displayStyle}>
            {createGrid()}
        </div>
    )
}

export default Grid;