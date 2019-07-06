import React from 'react'

import isValidInput from '../js/isValidInput';

const AddSubplotInterface = ({ setAddSubplot, gridSpecs }) => {
    const { gridSize } = gridSpecs;
    const maxIndex = gridSize[0] * gridSize[1]; 

    const getGridSpecs = () => {
        const rows = isValidInput(parseInt(document.getElementById("grid-rows").value), 1, 12)
        const columns = isValidInput(parseInt(document.getElementById("grid-columns").value), 1, 12)
        
        const selectedIndex = isValidInput(parseInt(document.getElementById("grid-selected-index").value), 1, maxIndex)

        setAddSubplot([rows, columns], selectedIndex)

    }


    return(
        <div id="AddSubplotInterface" className="interface">
            <form id="interface-form" onChange={getGridSpecs}>
                .add_subplot(
                <input id="grid-rows" type="number" defaultValue="1" min="1" max="12"/>,
                
                <input id="grid-columns" type="number" defaultValue="1" min="1" max="12"/>,

                <input id="grid-selected-index" type="number" defaultValue="1" min="1" max={`${maxIndex}`}/>
                )
            </form>
        </div>
    )

}

export default AddSubplotInterface; 