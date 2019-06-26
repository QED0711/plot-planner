import React from 'react'

const Interface = ({ setGrid, gridSpecs }) => {

    const getGridSpecs = () => {
        const rows = parseInt(document.getElementById("grid-rows").value)
        const columns = parseInt(document.getElementById("grid-columns").value)
        
        const selectedIndex = parseInt(document.getElementById("grid-selected-index").value)
        
        setGrid([rows, columns], selectedIndex)
    }

    const { gridSize } = gridSpecs;
    const maxIndex = gridSize[0] * gridSize[1]; 

    return(
        <div className="Interface">
            <form id="interface-form" onChange={getGridSpecs}>
                .add_subplot(
                <input id="grid-rows" type="number" defaultValue="1" min="1" max="10"/>,
                
                <input id="grid-columns" type="number" defaultValue="1" min="1" max="10"/>,

                <input id="grid-selected-index" type="number" defaultValue="1" min="1" max={`${maxIndex}`}/>
                )
            </form>
        </div>
    )

}

export default Interface; 