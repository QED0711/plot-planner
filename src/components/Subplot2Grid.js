import React from 'react';
import checkInts from '../js/checkInts';

const Subplot2Grid = ({ gridSpecs }) => {



    const {shape, loc, rowspan, colspan} = gridSpecs

    const createMatrix = (shape) => {
        let matrix = [];
        let index = 0
        while(matrix.length < shape[0]){
            let newRow = []
            while(newRow.length < shape[1]){
                newRow.push(index)
                index += 1
            }
            matrix.push(newRow)
        }
        return matrix
    }

    const selectedItemList = () => {
        let selected = [];
        const matrix = createMatrix(shape)
        for(let i = loc[0]; i < loc[0] + rowspan; i++){
            selected.push(...matrix[i].slice(loc[1], loc[1] + colspan))
        }
        return selected
    }
    
    const createGrid = () => {
        const totalItems = shape[0] * shape[1]
        const selectedItems = selectedItemList();
        const gridItems = []
        for(let i = 0; i < totalItems; i++){
            if(selectedItems.includes(i)){
                gridItems.push(
                    <div key={i} className="grid-item selected-true"><p>{i}</p></div>
                )
            } else {
                gridItems.push(
                    <div key={i} className="grid-item selected-false"><p>{i}</p></div>
                )
            }
        }

        return gridItems;
    }

    const displayStyle = {
        gridTemplateRows: `repeat(${shape[0]}, 1fr)`,
        gridTemplateColumns: `repeat(${shape[1]}, 1fr)`,
    }

    return(
        <div className="grid-display" style={displayStyle}>
            {createGrid()}
        </div>
    )
}

export default Subplot2Grid;