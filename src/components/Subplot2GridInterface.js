import React from 'react'

import isValidInput from '../js/isValidInput';

const Subplot2GridInterface = ({ set2Grid, gridSpecs }) => {

    const {shape, loc, rowspan, colspan} = gridSpecs

    const [shape1max, shape2max, loc1max, loc2max, rowspanMax, colspanMax] = [
        9, 
        9, 
        shape[0] - rowspan, 
        shape[1] - colspan,
        shape[0] - loc[0],
        shape[1] - loc[1],
    ]

    const handleChange = () => {
        const shape1 = isValidInput(parseInt(document.getElementById("shape-1").value), 1, shape1max)
        const shape2 = isValidInput(parseInt(document.getElementById("shape-2").value), 1, shape2max)

        const loc1 = isValidInput(parseInt(document.getElementById("loc-1").value), 0, loc1max)
        const loc2 = isValidInput(parseInt(document.getElementById("loc-2").value), 0, loc2max)

        const rowspan = isValidInput(parseInt(document.getElementById("rowspan").value), 1, rowspanMax)
        const colspan = isValidInput(parseInt(document.getElementById("colspan").value), 1, colspanMax)
               
        const shape = [shape1, shape2]
        const loc = [loc1, loc2]

        set2Grid(shape, loc, rowspan, colspan)


    }

    return(
        <div id="subplot-2-grid-interface" className="interface">
            <form onChange={handleChange}>
                .subplot2grid(
                
                (<input id="shape-1" type="number" defaultValue="1" min="1" max="9"/>,
                <input id="shape-2" type="number" defaultValue="1" min="1" max="9" />),

                (<input id="loc-1" type="number" defaultValue="0" min="0" max={shape[0] - rowspan} />,
                <input id="loc-2" type="number" defaultValue="0" min="0" max={shape[1] - colspan}/>),

                <br/>
                
                rowspan=<input id="rowspan" type="number" defaultValue="1" min="1" max={shape[0] - loc[0]}/>,
                colspan=<input id="colspan" type="number" defaultValue="1" min="1" max={shape[1] - loc[1]}/>,

                )
            </form>
        </div>
    )

}

export default Subplot2GridInterface;