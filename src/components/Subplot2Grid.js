import React from 'react';
import checkInts from '../js/checkInts';

const Subplot2Grid = ({ gridSpecs }) => {

    let validEntry = true;

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
        const selectedItems = selectedItemList();
        
        if(!selectedItems) return <div><p>Invalid Plot</p></div>

        const gridItems = []
        let curIndex = 0;
        for(let i = 0; i < shape[0]; i++){
            for(let j = 0; j < shape[1]; j++){
                if(selectedItems.includes(curIndex)){
                    gridItems.push(
                        <div key={`${i}x${j}`} className="grid-item selected-true"><p>{`${i},${j}`}</p></div>
                    )
                } else {
                    gridItems.push(
                        <div key={`${i}x${j}`} className="grid-item selected-false"><p>{`${i},${j}`}</p></div>
                    )
                }
                curIndex += 1
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