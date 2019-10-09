
function checkIfGiveTrophy(number) {
    if(number === 1 || 
       number === 100 || 
       number === 1000 || 
       number === 10000 || 
       number === 100000) {
            return true;
    } else {
        return false;
    }
}