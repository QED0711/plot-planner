import React from 'react'

const Subplot2GridInterface = ({ set2Grid }) => {



    const handleChange = () => {
        const shape1 = parseInt(document.getElementById("shape-1").value)
        const shape2 = parseInt(document.getElementById("shape-2").value)
        const loc1 = parseInt(document.getElementById("loc-1").value)
        const loc2 = parseInt(document.getElementById("loc-2").value)
        const rowspan = parseInt(document.getElementById("rowspan").value)
        const colspan = parseInt(document.getElementById("colspan").value)

        const shape = [shape1, shape2]
        const loc = [loc1, loc2]

        set2Grid(shape, loc, rowspan, colspan)

    }

    return(
        <div id="subplot-2-grid-interface" className="interface">
            <form onChange={handleChange}>
                .subplot2grid(
                
                (<input id="shape-1" type="number" defaultValue="1" max="10" min="1"/>
                <input id="shape-2" type="number" defaultValue="1" max="10" min="1" />),

                (<input id="loc-1" type="number" defaultValue="0" max="9" min="0"/>
                <input id="loc-2" type="number" defaultValue="0" max="9" min="0" />),

                <br/>
                
                rowspan=<input id="rowspan" type="number" defaultValue="1" max="10" min="1"/>,
                colspan=<input id="colspan" type="number" defaultValue="1" max="10" min="1"/>,

                )
            </form>
        </div>
    )

}

export default Subplot2GridInterface;