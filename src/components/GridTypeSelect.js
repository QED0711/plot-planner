import React from 'react';
import Grid from './Grid';

const GridTypeSelect = ({ setType, selectedType }) => {

    const handleClick = (type) => {
        return () => setType(type)
    }

    return (
        <div id="grid-type-select">
            <button className={`type-selector-button button-selected-${selectedType === "add_subplot"}`} 
                onClick={handleClick('add_subplot')}>
                    .add_subplot
            </button>
            
            <button className={`type-selector-button button-selected-${selectedType === "subplot2Grid"}`} 
                onClick={handleClick('subplot2Grid')}>
                    .subplot2grid
            </button>
        </div>
    )
}

export default GridTypeSelect;