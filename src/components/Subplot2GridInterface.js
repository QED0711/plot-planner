import React from 'react'

const Subplot2GridInterface = () => {

    return(
        <div id="subplot-2-grid-interface">
            <form onChange={() => {console.log("hello world")}}>
                .subplot2grid(
                
                (<input type='number' />
                <input type='number' />),

                (<input type="number"/>
                <input type="number"/>),
                
                rowspan=<input type="number" defaultValue="1"/>,
                colspan=<input type="number" defaultValue="1"/>,

                )
            </form>
        </div>
    )

}

export default Subplot2GridInterface;