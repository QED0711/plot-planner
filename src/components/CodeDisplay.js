import React from 'react';

const CodeDisplay = ({ type, gridSpec }) => {
    const gs = gridSpec;
    return(
        <div className="code-display">
            {
                type === "add_subplot" ?
                <div>
                    {`fig.add_subplot(${gs.gridSize[0]}, ${gs.gridSize[1]}, ${gs.selectedIndex})`}
                </div>
                :
                <div>
                    {`plt.subplot2grid((${gs.shape[0]}, ${gs.shape[1]}), (${gs.loc[0]}, ${gs.loc[1]}), rowspan=${gs.rowspan}, colspan=${gs.colspan})`}
                </div>
            }
        </div>
    )
}

export default CodeDisplay;