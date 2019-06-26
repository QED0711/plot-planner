import React from 'react';
import Grid from './Grid';

const GridTypeSelect = ({ setType }) => {

    const handleClick = (type) => {
        return () => setType(type)
    }

    return (
        <div id="grid-type-select">
            <button onClick={handleClick('add_subplot')}>.add_subplot</button>
            <button onClick={handleClick('subplot2Grid')}>.subplot2Grid</button>
        </div>
    )
}

export default GridTypeSelect;