const checkInts = (arr) => {

    for(let intStr of arr){
        if(isNaN(parseInt(intStr))){
            return false
        }
    }
    return true;
}

export default checkInts;