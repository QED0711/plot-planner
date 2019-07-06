const isValidInput = (input, mn, mx) => {
    // Checks to make sure input is between a given min and max.
    // If not, returns either min or max depending on if it was greater then or less than target range

    if(isNaN(input) || input <= mn) return mn
    if(input >= mx) return mx
    return input
}

export default isValidInput;